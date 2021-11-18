import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Elemento, ElementoRelations, Prestamo} from '../models';
import {PrestamoRepository} from './prestamo.repository';

export class ElementoRepository extends DefaultCrudRepository<
  Elemento,
  typeof Elemento.prototype.id,
  ElementoRelations
> {

  public readonly elementoPrestado: HasOneRepositoryFactory<Prestamo, typeof Elemento.prototype.id>;

  constructor(
    @inject('datasources.monGODb') dataSource: MonGoDbDataSource, @repository.getter('PrestamoRepository') protected prestamoRepositoryGetter: Getter<PrestamoRepository>,
  ) {
    super(Elemento, dataSource);
    this.elementoPrestado = this.createHasOneRepositoryFactoryFor('elementoPrestado', prestamoRepositoryGetter);
    this.registerInclusionResolver('elementoPrestado', this.elementoPrestado.inclusionResolver);
  }
}
