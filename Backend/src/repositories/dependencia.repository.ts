import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Dependencia, DependenciaRelations} from '../models';

export class DependenciaRepository extends DefaultCrudRepository<
  Dependencia,
  typeof Dependencia.prototype.id
> {
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Dependencia, dataSource);
  }
}
