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
  Funcionario,
  Salida,
} from '../models';
import {FuncionarioRepository} from '../repositories';

export class FuncionarioSalidaController {
  constructor(
    @repository(FuncionarioRepository) protected funcionarioRepository: FuncionarioRepository,
  ) { }

  @get('/funcionarios/{id}/salidas', {
    responses: {
      '200': {
        description: 'Array of Funcionario has many Salida',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Salida)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Salida>,
  ): Promise<Salida[]> {
    return this.funcionarioRepository.funcionarioEntrega(id).find(filter);
  }

  @post('/funcionarios/{id}/salidas', {
    responses: {
      '200': {
        description: 'Funcionario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Salida)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Funcionario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {
            title: 'NewSalidaInFuncionario',
            exclude: ['id'],
            optional: ['idFuncionarioResponsable']
          }),
        },
      },
    }) salida: Omit<Salida, 'id'>,
  ): Promise<Salida> {
    return this.funcionarioRepository.funcionarioEntrega(id).create(salida);
  }

  @patch('/funcionarios/{id}/salidas', {
    responses: {
      '200': {
        description: 'Funcionario.Salida PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {partial: true}),
        },
      },
    })
    salida: Partial<Salida>,
    @param.query.object('where', getWhereSchemaFor(Salida)) where?: Where<Salida>,
  ): Promise<Count> {
    return this.funcionarioRepository.funcionarioEntrega(id).patch(salida, where);
  }

  @del('/funcionarios/{id}/salidas', {
    responses: {
      '200': {
        description: 'Funcionario.Salida DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Salida)) where?: Where<Salida>,
  ): Promise<Count> {
    return this.funcionarioRepository.funcionarioEntrega(id).delete(where);
  }
}
