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
  Entrada,
  Prestamo,
} from '../models';
import {EntradaRepository} from '../repositories';

export class EntradaPrestamoController {
  constructor(
    @repository(EntradaRepository) protected entradaRepository: EntradaRepository,
  ) { }

  @get('/entradas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Entrada has one Prestamo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Prestamo),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Prestamo>,
  ): Promise<Prestamo> {
    return this.entradaRepository.prestamo(id).get(filter);
  }

  @post('/entradas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Entrada model instance',
        content: {'application/json': {schema: getModelSchemaRef(Prestamo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Entrada.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {
            title: 'NewPrestamoInEntrada',
            exclude: ['id'],
            optional: ['idEntrada']
          }),
        },
      },
    }) prestamo: Omit<Prestamo, 'id'>,
  ): Promise<Prestamo> {
    return this.entradaRepository.prestamo(id).create(prestamo);
  }

  @patch('/entradas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Entrada.Prestamo PATCH success count',
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
    return this.entradaRepository.prestamo(id).patch(prestamo, where);
  }

  @del('/entradas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Entrada.Prestamo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.entradaRepository.prestamo(id).delete(where);
  }
}
