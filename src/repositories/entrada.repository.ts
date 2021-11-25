import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Entrada} from '../models';

export class EntradaRepository extends DefaultCrudRepository<
  Entrada,
  typeof Entrada.prototype.id
> {

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Entrada, dataSource);
  }
}
