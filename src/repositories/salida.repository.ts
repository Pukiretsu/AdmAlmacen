import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Salida, SalidaRelations, Prestamo} from '../models';
import {PrestamoRepository} from './prestamo.repository';

export class SalidaRepository extends DefaultCrudRepository<
  Salida,
  typeof Salida.prototype.id,
  SalidaRelations
> {

  public readonly salida: HasOneRepositoryFactory<Prestamo, typeof Salida.prototype.id>;

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource, @repository.getter('PrestamoRepository') protected prestamoRepositoryGetter: Getter<PrestamoRepository>,
  ) {
    super(Salida, dataSource);
    this.salida = this.createHasOneRepositoryFactoryFor('salida', prestamoRepositoryGetter);
    this.registerInclusionResolver('salida', this.salida.inclusionResolver);
  }
}
