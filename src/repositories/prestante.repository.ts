import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Prestante, PrestanteRelations, Prestamo} from '../models';
import {PrestamoRepository} from './prestamo.repository';

export class PrestanteRepository extends DefaultCrudRepository<
  Prestante,
  typeof Prestante.prototype.id,
  PrestanteRelations
> {

  public readonly prestamosFuncionario: HasManyRepositoryFactory<Prestamo, typeof Prestante.prototype.id>;

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource, @repository.getter('PrestamoRepository') protected prestamoRepositoryGetter: Getter<PrestamoRepository>,
  ) {
    super(Prestante, dataSource);
    this.prestamosFuncionario = this.createHasManyRepositoryFactoryFor('prestamosFuncionario', prestamoRepositoryGetter,);
    this.registerInclusionResolver('prestamosFuncionario', this.prestamosFuncionario.inclusionResolver);
  }
}
