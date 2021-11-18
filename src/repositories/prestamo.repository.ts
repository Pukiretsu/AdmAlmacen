import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Prestamo, PrestamoRelations, Salida} from '../models';
import {SalidaRepository} from './salida.repository';

export class PrestamoRepository extends DefaultCrudRepository<
  Prestamo,
  typeof Prestamo.prototype.id,
  PrestamoRelations
> {

  public readonly salida: BelongsToAccessor<Salida, typeof Prestamo.prototype.id>;

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource, @repository.getter('SalidaRepository') protected salidaRepositoryGetter: Getter<SalidaRepository>,
  ) {
    super(Prestamo, dataSource);
    this.salida = this.createBelongsToAccessorFor('salida', salidaRepositoryGetter,);
    this.registerInclusionResolver('salida', this.salida.inclusionResolver);
  }
}
