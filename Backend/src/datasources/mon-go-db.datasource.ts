import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {keys} from '../keys/keys';
import {juggler} from '@loopback/repository';

const config = {
  name: 'monGODb',
  connector: 'mongodb',
  url: keys.url,
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MonGoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'monGODb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.monGODb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
