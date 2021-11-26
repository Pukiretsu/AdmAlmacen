import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Elemento} from '../models';

export class ElementoRepository extends DefaultCrudRepository<
  Elemento,
  typeof Elemento.prototype.id
> {
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Elemento, dataSource);
  }
}
