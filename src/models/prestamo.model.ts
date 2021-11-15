import {Entity, model, property} from '@loopback/repository';

@model()
export class Prestamo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_Prestamo?: string;


  constructor(data?: Partial<Prestamo>) {
    super(data);
  }
}

export interface PrestamoRelations {
  // describe navigational properties here
}

export type PrestamoWithRelations = Prestamo & PrestamoRelations;
