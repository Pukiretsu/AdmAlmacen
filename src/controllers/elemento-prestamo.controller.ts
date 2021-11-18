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
  Elemento,
  Prestamo,
} from '../models';
import {ElementoRepository} from '../repositories';

export class ElementoPrestamoController {
  constructor(
    @repository(ElementoRepository) protected elementoRepository: ElementoRepository,
  ) { }

  @get('/elementos/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Elemento has one Prestamo',
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
    return this.elementoRepository.elementoPrestado(id).get(filter);
  }

  @post('/elementos/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Elemento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Prestamo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Elemento.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {
            title: 'NewPrestamoInElemento',
            exclude: ['id'],
            optional: ['idElemento']
          }),
        },
      },
    }) prestamo: Omit<Prestamo, 'id'>,
  ): Promise<Prestamo> {
    return this.elementoRepository.elementoPrestado(id).create(prestamo);
  }

  @patch('/elementos/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Elemento.Prestamo PATCH success count',
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
    return this.elementoRepository.elementoPrestado(id).patch(prestamo, where);
  }

  @del('/elementos/{id}/prestamo', {
    responses: {
      '200': {
        description: 'Elemento.Prestamo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.elementoRepository.elementoPrestado(id).delete(where);
  }
}
