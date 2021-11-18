import {Entity, model, property, hasMany} from '@loopback/repository';
import {Entrada} from './entrada.model';
import {Salida} from './salida.model';

@model()
export class Funcionario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  grado: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasMany(() => Entrada, {keyTo: 'idFuncionarioResponsable'})
  funcionarioRecibe: Entrada[];

  @hasMany(() => Salida, {keyTo: 'idFuncionarioResponsable'})
  funcionarioEntrega: Salida[];

  constructor(data?: Partial<Funcionario>) {
    super(data);
  }
}

export interface FuncionarioRelations {
  // describe navigational properties here
}

export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
