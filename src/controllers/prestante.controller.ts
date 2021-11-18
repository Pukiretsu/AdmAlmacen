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
import {Prestante} from '../models';
import {PrestanteRepository} from '../repositories';

export class PrestanteController {
  constructor(
    @repository(PrestanteRepository)
    public prestanteRepository : PrestanteRepository,
  ) {}

  @post('/prestantes')
  @response(200, {
    description: 'Prestante model instance',
    content: {'application/json': {schema: getModelSchemaRef(Prestante)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestante, {
            title: 'NewPrestante',
            exclude: ['id'],
          }),
        },
      },
    })
    prestante: Omit<Prestante, 'id'>,
  ): Promise<Prestante> {
    return this.prestanteRepository.create(prestante);
  }

  @get('/prestantes/count')
  @response(200, {
    description: 'Prestante model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Prestante) where?: Where<Prestante>,
  ): Promise<Count> {
    return this.prestanteRepository.count(where);
  }

  @get('/prestantes')
  @response(200, {
    description: 'Array of Prestante model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Prestante, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Prestante) filter?: Filter<Prestante>,
  ): Promise<Prestante[]> {
    return this.prestanteRepository.find(filter);
  }

  @patch('/prestantes')
  @response(200, {
    description: 'Prestante PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestante, {partial: true}),
        },
      },
    })
    prestante: Prestante,
    @param.where(Prestante) where?: Where<Prestante>,
  ): Promise<Count> {
    return this.prestanteRepository.updateAll(prestante, where);
  }

  @get('/prestantes/{id}')
  @response(200, {
    description: 'Prestante model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Prestante, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Prestante, {exclude: 'where'}) filter?: FilterExcludingWhere<Prestante>
  ): Promise<Prestante> {
    return this.prestanteRepository.findById(id, filter);
  }

  @patch('/prestantes/{id}')
  @response(204, {
    description: 'Prestante PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prestante, {partial: true}),
        },
      },
    })
    prestante: Prestante,
  ): Promise<void> {
    await this.prestanteRepository.updateById(id, prestante);
  }

  @put('/prestantes/{id}')
  @response(204, {
    description: 'Prestante PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() prestante: Prestante,
  ): Promise<void> {
    await this.prestanteRepository.replaceById(id, prestante);
  }

  @del('/prestantes/{id}')
  @response(204, {
    description: 'Prestante DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.prestanteRepository.deleteById(id);
  }
}
