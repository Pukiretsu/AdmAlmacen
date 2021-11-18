import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Prestamo,
  Salida,
} from '../models';
import {PrestamoRepository} from '../repositories';

export class PrestamoSalidaController {
  constructor(
    @repository(PrestamoRepository)
    public prestamoRepository: PrestamoRepository,
  ) { }

  @get('/prestamos/{id}/salida', {
    responses: {
      '200': {
        description: 'Salida belonging to Prestamo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Salida)},
          },
        },
      },
    },
  })
  async getSalida(
    @param.path.string('id') id: typeof Prestamo.prototype.id,
  ): Promise<Salida> {
    return this.prestamoRepository.salida(id);
  }
}
