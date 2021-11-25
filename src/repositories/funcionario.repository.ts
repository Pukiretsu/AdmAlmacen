import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Funcionario} from '../models';

export class FuncionarioRepository extends DefaultCrudRepository<
  Funcionario,
  typeof Funcionario.prototype.id
> {
  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Funcionario, dataSource);
  }
}
