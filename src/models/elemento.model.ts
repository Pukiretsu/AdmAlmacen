import {Entity, model, property} from '@loopback/repository';

@model()
export class Elemento extends Entity {
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
  clase: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'string',
    required: true,
  })
  serie: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroInventario: string;

  @property({
    type: 'string',
    required: true,
  })
  plazoMaximo: string;


  constructor(data?: Partial<Elemento>) {
    super(data);
  }
}

export interface ElementoRelations {
  // describe navigational properties here
}

export type ElementoWithRelations = Elemento & ElementoRelations;
