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
import {Elemento} from '../models';
import {ElementoRepository} from '../repositories';

export class ElementoController {
  constructor(
    @repository(ElementoRepository)
    public elementoRepository : ElementoRepository,
  ) {}

  @post('/elementos')
  @response(200, {
    description: 'Elemento model instance',
    content: {'application/json': {schema: getModelSchemaRef(Elemento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Elemento, {
            title: 'NewElemento',
            exclude: ['id'],
          }),
        },
      },
    })
    elemento: Omit<Elemento, 'id'>,
  ): Promise<Elemento> {
    return this.elementoRepository.create(elemento);
  }

  @get('/elementos/count')
  @response(200, {
    description: 'Elemento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Elemento) where?: Where<Elemento>,
  ): Promise<Count> {
    return this.elementoRepository.count(where);
  }

  @get('/elementos')
  @response(200, {
    description: 'Array of Elemento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Elemento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Elemento) filter?: Filter<Elemento>,
  ): Promise<Elemento[]> {
    return this.elementoRepository.find(filter);
  }

  @patch('/elementos')
  @response(200, {
    description: 'Elemento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Elemento, {partial: true}),
        },
      },
    })
    elemento: Elemento,
    @param.where(Elemento) where?: Where<Elemento>,
  ): Promise<Count> {
    return this.elementoRepository.updateAll(elemento, where);
  }

  @get('/elementos/{id}')
  @response(200, {
    description: 'Elemento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Elemento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Elemento, {exclude: 'where'}) filter?: FilterExcludingWhere<Elemento>
  ): Promise<Elemento> {
    return this.elementoRepository.findById(id, filter);
  }

  @patch('/elementos/{id}')
  @response(204, {
    description: 'Elemento PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Elemento, {partial: true}),
        },
      },
    })
    elemento: Elemento,
  ): Promise<void> {
    await this.elementoRepository.updateById(id, elemento);
  }

  @put('/elementos/{id}')
  @response(204, {
    description: 'Elemento PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() elemento: Elemento,
  ): Promise<void> {
    await this.elementoRepository.replaceById(id, elemento);
  }

  @del('/elementos/{id}')
  @response(204, {
    description: 'Elemento DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.elementoRepository.deleteById(id);
  }
}
