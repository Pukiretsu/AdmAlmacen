import {Entity, model, property} from '@loopback/repository';

@model()
export class Elemento extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  clase: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  numeroInventario: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  serie: string;

  @property({
    type: 'string',
    required: true,
  })
  plazoMaximoPrestamo: string;


  constructor(data?: Partial<Elemento>) {
    super(data);
  }
}

export interface ElementoRelations {
  // describe navigational properties here
}

export type ElementoWithRelations = Elemento & ElementoRelations;
