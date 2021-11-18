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
import {Entrada} from '../models';
import {EntradaRepository} from '../repositories';

export class EntradaController {
  constructor(
    @repository(EntradaRepository)
    public entradaRepository : EntradaRepository,
  ) {}

  @post('/entradas')
  @response(200, {
    description: 'Entrada model instance',
    content: {'application/json': {schema: getModelSchemaRef(Entrada)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrada, {
            title: 'NewEntrada',
            exclude: ['id'],
          }),
        },
      },
    })
    entrada: Omit<Entrada, 'id'>,
  ): Promise<Entrada> {
    return this.entradaRepository.create(entrada);
  }

  @get('/entradas/count')
  @response(200, {
    description: 'Entrada model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Entrada) where?: Where<Entrada>,
  ): Promise<Count> {
    return this.entradaRepository.count(where);
  }

  @get('/entradas')
  @response(200, {
    description: 'Array of Entrada model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Entrada, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Entrada) filter?: Filter<Entrada>,
  ): Promise<Entrada[]> {
    return this.entradaRepository.find(filter);
  }

  @patch('/entradas')
  @response(200, {
    description: 'Entrada PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrada, {partial: true}),
        },
      },
    })
    entrada: Entrada,
    @param.where(Entrada) where?: Where<Entrada>,
  ): Promise<Count> {
    return this.entradaRepository.updateAll(entrada, where);
  }

  @get('/entradas/{id}')
  @response(200, {
    description: 'Entrada model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Entrada, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Entrada, {exclude: 'where'}) filter?: FilterExcludingWhere<Entrada>
  ): Promise<Entrada> {
    return this.entradaRepository.findById(id, filter);
  }

  @patch('/entradas/{id}')
  @response(204, {
    description: 'Entrada PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrada, {partial: true}),
        },
      },
    })
    entrada: Entrada,
  ): Promise<void> {
    await this.entradaRepository.updateById(id, entrada);
  }

  @put('/entradas/{id}')
  @response(204, {
    description: 'Entrada PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() entrada: Entrada,
  ): Promise<void> {
    await this.entradaRepository.replaceById(id, entrada);
  }

  @del('/entradas/{id}')
  @response(204, {
    description: 'Entrada DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.entradaRepository.deleteById(id);
  }
}
