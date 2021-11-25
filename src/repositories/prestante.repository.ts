import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Prestante} from '../models';

export class PrestanteRepository extends DefaultCrudRepository<Prestante, typeof Prestante.prototype.id>
{
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Prestante, dataSource);
  }
}
