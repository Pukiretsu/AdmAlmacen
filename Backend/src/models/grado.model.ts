import {Entity, model, property} from '@loopback/repository';

@model()
export class Grado extends Entity {
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
  codigoGrado: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreGrado: string;


  constructor(data?: Partial<Grado>) {
    super(data);
  }
}

export interface GradoRelations {
  
}

export type GradoWithRelations = Grado & GradoRelations;
