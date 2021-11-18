import {service} from '@loopback/core';
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
import {Funcionario} from '../models';
import {FuncionarioRepository} from '../repositories';
import {AutenticacionService} from '../services';

export class FuncionarioController {
  constructor(
    @repository(FuncionarioRepository)
    public funcionarioRepository : FuncionarioRepository,
    @service(AutenticacionService)
    public authservice : AutenticacionService
  ) {}

  @post('/funcionarios')
  @response(200, {
    description: 'Funcionario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Funcionario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funcionario, {
            title: 'NewFuncionario',
            exclude: ['id'],
          }),
        },
      },
    })
    funcionario: Omit<Funcionario, 'id'>,
  ): Promise<Funcionario> {
    const encryptedPaswd = this.authservice.cifrarPassword(funcionario.password);
    funcionario.password = encryptedPaswd;

    return this.funcionarioRepository.create(funcionario);
  }

  @get('/funcionarios/count')
  @response(200, {
    description: 'Funcionario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Funcionario) where?: Where<Funcionario>,
  ): Promise<Count> {
    return this.funcionarioRepository.count(where);
  }

  @get('/funcionarios')
  @response(200, {
    description: 'Array of Funcionario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Funcionario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Funcionario) filter?: Filter<Funcionario>,
  ): Promise<Funcionario[]> {
    return this.funcionarioRepository.find(filter);
  }

  @patch('/funcionarios')
  @response(200, {
    description: 'Funcionario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funcionario, {partial: true}),
        },
      },
    })
    funcionario: Funcionario,
    @param.where(Funcionario) where?: Where<Funcionario>,
  ): Promise<Count> {
    return this.funcionarioRepository.updateAll(funcionario, where);
  }

  @get('/funcionarios/{id}')
  @response(200, {
    description: 'Funcionario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Funcionario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Funcionario, {exclude: 'where'}) filter?: FilterExcludingWhere<Funcionario>
  ): Promise<Funcionario> {
    return this.funcionarioRepository.findById(id, filter);
  }

  @patch('/funcionarios/{id}')
  @response(204, {
    description: 'Funcionario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Funcionario, {partial: true}),
        },
      },
    })
    funcionario: Funcionario,
  ): Promise<void> {
    await this.funcionarioRepository.updateById(id, funcionario);
  }

  @put('/funcionarios/{id}')
  @response(204, {
    description: 'Funcionario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() funcionario: Funcionario,
  ): Promise<void> {
    await this.funcionarioRepository.replaceById(id, funcionario);
  }

  @del('/funcionarios/{id}')
  @response(204, {
    description: 'Funcionario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.funcionarioRepository.deleteById(id);
  }
}
