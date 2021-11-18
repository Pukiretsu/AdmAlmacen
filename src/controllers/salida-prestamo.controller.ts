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
  Salida,
  Prestamo,
} from '../models';
import {SalidaRepository} from '../repositories';

export class SalidaPrestamoController {
  constructor(
    @repository(SalidaRepository) protected salidaRepository: SalidaRepository,
  ) { }

  @get('/salidas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Salida has one Prestamo',
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
    return this.salidaRepository.salida(id).get(filter);
  }

  @post('/salidas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Salida model instance',
        content: {'application/json': {schema: getModelSchemaRef(Prestamo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Salida.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {
            title: 'NewPrestamoInSalida',
            exclude: ['id'],
            optional: ['idSalida']
          }),
        },
      },
    }) prestamo: Omit<Prestamo, 'id'>,
  ): Promise<Prestamo> {
    return this.salidaRepository.salida(id).create(prestamo);
  }

  @patch('/salidas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Salida.Prestamo PATCH success count',
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
    return this.salidaRepository.salida(id).patch(prestamo, where);
  }

  @del('/salidas/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Salida.Prestamo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.salidaRepository.salida(id).delete(where);
  }
}
