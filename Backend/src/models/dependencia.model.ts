import {Entity, model, property} from '@loopback/repository';

@model()
export class Dependencia extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  codDependencia?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreDependencia: string;


  constructor(data?: Partial<Dependencia>) {
    super(data);
  }
}

export interface DependenciaRelations {
  // describe navigational properties here
}

export type DependenciaWithRelations = Dependencia & DependenciaRelations;
