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
  Entrada,
} from '../models';
import {FuncionarioRepository} from '../repositories';

export class FuncionarioEntradaController {
  constructor(
    @repository(FuncionarioRepository) protected funcionarioRepository: FuncionarioRepository,
  ) { }

  @get('/funcionarios/{id}/entradas', {
    responses: {
      '200': {
        description: 'Array of Funcionario has many Entrada',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Entrada)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Entrada>,
  ): Promise<Entrada[]> {
    return this.funcionarioRepository.funcionarioRecibe(id).find(filter);
  }

  @post('/funcionarios/{id}/entradas', {
    responses: {
      '200': {
        description: 'Funcionario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Entrada)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Funcionario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrada, {
            title: 'NewEntradaInFuncionario',
            exclude: ['id'],
            optional: ['idFuncionarioResponsable']
          }),
        },
      },
    }) entrada: Omit<Entrada, 'id'>,
  ): Promise<Entrada> {
    return this.funcionarioRepository.funcionarioRecibe(id).create(entrada);
  }

  @patch('/funcionarios/{id}/entradas', {
    responses: {
      '200': {
        description: 'Funcionario.Entrada PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrada, {partial: true}),
        },
      },
    })
    entrada: Partial<Entrada>,
    @param.query.object('where', getWhereSchemaFor(Entrada)) where?: Where<Entrada>,
  ): Promise<Count> {
    return this.funcionarioRepository.funcionarioRecibe(id).patch(entrada, where);
  }

  @del('/funcionarios/{id}/entradas', {
    responses: {
      '200': {
        description: 'Funcionario.Entrada DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Entrada)) where?: Where<Entrada>,
  ): Promise<Count> {
    return this.funcionarioRepository.funcionarioRecibe(id).delete(where);
  }
}
