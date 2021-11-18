import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Prestamo, PrestamoRelations} from '../models';

export class PrestamoRepository extends DefaultCrudRepository<
  Prestamo,
  typeof Prestamo.prototype.idPrestamo,
  PrestamoRelations
> {
  constructor(
    @inject('datasources.MonGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Prestamo, dataSource);
  }
}
