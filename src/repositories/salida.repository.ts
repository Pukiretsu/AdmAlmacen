import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Salida} from '../models';

export class SalidaRepository extends DefaultCrudRepository<
  Salida,
  typeof Salida.prototype.id
> {
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Salida, dataSource);
  }
}
