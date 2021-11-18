import {Entity, hasMany, model, property} from '@loopback/repository';
import {Prestamo} from './prestamo.model';

@model()
export class Prestante extends Entity {
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
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  dependencia: string;

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

  @hasMany(() => Prestamo, {keyTo: 'idPrestante'})
  prestamosPrestante: Prestamo[];

  constructor(data?: Partial<Prestante>) {
    super(data);
  }
}

export interface PrestanteRelations {
  // describe navigational properties here
}

export type PrestanteWithRelations = Prestante & PrestanteRelations;
