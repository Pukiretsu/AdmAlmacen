import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Funcionario, FuncionarioRelations, Entrada, Salida} from '../models';
import {EntradaRepository} from './entrada.repository';
import {SalidaRepository} from './salida.repository';

export class FuncionarioRepository extends DefaultCrudRepository<
  Funcionario,
  typeof Funcionario.prototype.id,
  FuncionarioRelations
> {

  public readonly funcionarioRecibe: HasManyRepositoryFactory<Entrada, typeof Funcionario.prototype.id>;

  public readonly funcionarioEntrega: HasManyRepositoryFactory<Salida, typeof Funcionario.prototype.id>;

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource, @repository.getter('EntradaRepository') protected entradaRepositoryGetter: Getter<EntradaRepository>, @repository.getter('SalidaRepository') protected salidaRepositoryGetter: Getter<SalidaRepository>,
  ) {
    super(Funcionario, dataSource);
    this.funcionarioEntrega = this.createHasManyRepositoryFactoryFor('funcionarioEntrega', salidaRepositoryGetter,);
    this.registerInclusionResolver('funcionarioEntrega', this.funcionarioEntrega.inclusionResolver);
    this.funcionarioRecibe = this.createHasManyRepositoryFactoryFor('funcionarioRecibe', entradaRepositoryGetter,);
    this.registerInclusionResolver('funcionarioRecibe', this.funcionarioRecibe.inclusionResolver);
  }
}
