import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Elemento, ElementoRelations} from '../models';

export class ElementoRepository extends DefaultCrudRepository<
  Elemento,
  typeof Elemento.prototype.numeroInventario,
  ElementoRelations
> {
  constructor(
    @inject('datasources.MonGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Elemento, dataSource);
  }
}
