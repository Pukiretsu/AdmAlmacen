import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Prestamo} from '../models';
import {PrestamoRepository} from '../repositories';

export class PrestamoController {
  constructor(
    @repository(PrestamoRepository)
    public prestamoRepository : PrestamoRepository,
  ) {}

  @authenticate('funcionario')
  @post('/prestamos')
  @response(200, {
    description: 'Prestamo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Prestamo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {
            title: 'NewPrestamo',
            exclude: ['id'],
          }),
        },
      },
    })
    prestamo: Omit<Prestamo, 'id'>,
  ): Promise<Prestamo> {
    return this.prestamoRepository.create(prestamo);
  }

  @authenticate('funcionario')
  @get('/prestamos/count')
  @response(200, {
    description: 'Prestamo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Prestamo) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.prestamoRepository.count(where);
  }

  @authenticate('funcionario')
  @get('/prestamos')
  @response(200, {
    description: 'Array of Prestamo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Prestamo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Prestamo) filter?: Filter<Prestamo>,
  ): Promise<Prestamo[]> {
    return this.prestamoRepository.find(filter);
  }

  @authenticate('funcionario')
  @patch('/prestamos')
  @response(200, {
    description: 'Prestamo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {partial: true}),
        },
      },
    })
    prestamo: Prestamo,
    @param.where(Prestamo) where?: Where<Prestamo>,
  ): Promise<Count> {
    return this.prestamoRepository.updateAll(prestamo, where);
  }

  @authenticate('funcionario')
  @get('/prestamos/{id}')
  @response(200, {
    description: 'Prestamo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Prestamo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Prestamo, {exclude: 'where'}) filter?: FilterExcludingWhere<Prestamo>
  ): Promise<Prestamo> {
    return this.prestamoRepository.findById(id, filter);
  }

  @authenticate('funcionario')
  @patch('/prestamos/{id}')
  @response(204, {
    description: 'Prestamo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestamo, {partial: true}),
        },
      },
    })
    prestamo: Prestamo,
  ): Promise<void> {
    await this.prestamoRepository.updateById(id, prestamo);
  }

  @authenticate('funcionario')
  @put('/prestamos/{id}')
  @response(204, {
    description: 'Prestamo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() prestamo: Prestamo,
  ): Promise<void> {
    await this.prestamoRepository.replaceById(id, prestamo);
  }

  @authenticate('admin')
  @del('/prestamos/{id}')
  @response(204, {
    description: 'Prestamo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.prestamoRepository.deleteById(id);
  }
}
