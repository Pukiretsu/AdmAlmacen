import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Entrada, EntradaRelations, Prestamo} from '../models';
import {PrestamoRepository} from './prestamo.repository';

export class EntradaRepository extends DefaultCrudRepository<
  Entrada,
  typeof Entrada.prototype.id,
  EntradaRelations
> {

  public readonly prestamo: HasOneRepositoryFactory<Prestamo, typeof Entrada.prototype.id>;

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource, @repository.getter('PrestamoRepository') protected prestamoRepositoryGetter: Getter<PrestamoRepository>,
  ) {
    super(Entrada, dataSource);
    this.prestamo = this.createHasOneRepositoryFactoryFor('prestamo', prestamoRepositoryGetter);
    this.registerInclusionResolver('prestamo', this.prestamo.inclusionResolver);
  }
}
