import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Grado, GradoRelations} from '../models';

export class GradoRepository extends DefaultCrudRepository<
  Grado,
  typeof Grado.prototype.codGrado,
  GradoRelations
> {
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Grado, dataSource);
  }
}
