import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Prestamo} from '../models';

export class PrestamoRepository extends DefaultCrudRepository<
  Prestamo,
  typeof Prestamo.prototype.id
> {
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Prestamo, dataSource);
  }
}
