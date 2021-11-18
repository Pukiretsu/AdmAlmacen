import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Prestante,
  Prestamo,
} from '../models';
import {PrestanteRepository} from '../repositories';

export class PrestantePrestamoController {
  constructor(
    @repository(PrestanteRepository) protected prestanteRepository: PrestanteRepository,
  ) { }

  @get('/prestantes/{id}/prestamos', {
    responses: {
      '200': {
        description: 'Array of Prestante has many Prestamo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Prestamo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Prestamo>,
  ): Promise<Prestamo[]> {
    return this.prestanteRepository.prestamosFuncionario(id).find(filter);
  }

  @post('/prestantes/{id}/prestamos', {
    responses: {
      '200': {
        description: 'Prestante model instance',
        content: {'application/json': {schema: getModelSchemaRef(Prestamo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Prestante.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {
            title: 'NewPrestamoInPrestante',
            exclude: ['id'],
            optional: ['idPrestante']
          }),
        },
      },
    }) prestamo: Omit<Prestamo, 'id'>,
  ): Promise<Prestamo> {
    return this.prestanteRepository.prestamosFuncionario(id).create(prestamo);
  }

  @patch('/prestantes/{id}/prestamos', {
    responses: {
      '200': {
        description: 'Prestante.Prestamo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {partial: true}),
        },
      },
    })
    prestamo: Partial<Prestamo>,
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.prestanteRepository.prestamosFuncionario(id).patch(prestamo, where);
  }

  @del('/prestantes/{id}/prestamos', {
    responses: {
      '200': {
        description: 'Prestante.Prestamo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.prestanteRepository.prestamosFuncionario(id).delete(where);
  }
}
