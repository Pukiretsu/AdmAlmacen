import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Prestante, PrestanteRelations, Prestamo} from '../models';
import {PrestamoRepository} from './prestamo.repository';

export class PrestanteRepository extends DefaultCrudRepository<
  Prestante,
  typeof Prestante.prototype.cedulaPrestante,
  PrestanteRelations
> {

  public readonly prestamos: HasManyRepositoryFactory<Prestamo, typeof Prestante.prototype.id>;

  constructor(
    @inject('datasources.MonGODb') dataSource: MonGoDbDataSource, @repository.getter('PrestamoRepository') protected prestamoRepositoryGetter: Getter<PrestamoRepository>,
  ) {
    super(Prestante, dataSource);
    this.prestamos = this.createHasManyRepositoryFactoryFor('prestamos', prestamoRepositoryGetter,);
    this.registerInclusionResolver('prestamos', this.prestamos.inclusionResolver);
  }
}
