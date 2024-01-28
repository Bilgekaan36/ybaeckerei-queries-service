import { flaschenpost } from 'flaschenpost';
import { getApi } from './lib/getApi';
import http from 'http';
import { MongoDbStore } from './lib/store/MongoDbStore';
import { PORT } from './configs';
import { PostgresqlDbStore } from './lib/store/PostgresqlDbStore';
import { redisConnection } from './redis-connection';
import { QueueEvents } from 'bullmq';

(async () => {
  const logger = flaschenpost.getLogger();

  // const store = new InMemoryStore();
  // const store = new MongoDbStore({
  //   hostname: 'localhost',
  //   port: 27017,
  //   database: 'todos',
  //   username: 'node',
  //   password: 'node',
  // });

  const store = new PostgresqlDbStore({
    user: 'postgres',
    host: 'localhost',
    database: 'yilmazbakerydb',
    password: 'secret',
    port: 5432,
  });

  await store.initialize();

  const queueEvents = new QueueEvents('eventqueue', {
    connection: redisConnection,
  });

  queueEvents.on('completed', ({ jobId: string }) => {
    // Called every time a job is completed in any worker.
    console.log('completed', string);
  });

  queueEvents.on(
    'progress',
    ({ jobId, data }: { jobId: string; data: number | object }) => {
      // jobId received a progress event
    }
  );

  const api = getApi({ store });
  const server: any = http.createServer(api);

  server.listen(PORT, () => {
    logger.info('Server started.', { PORT });
  });
})();
