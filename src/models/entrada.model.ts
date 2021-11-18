import {Entity, model, property, hasOne} from '@loopback/repository';
import {Prestamo} from './prestamo.model';

@model()
export class Entrada extends Entity {
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
  idFuncionarioResponsable: string;

  @property({
    type: 'string',
    required: true,
  })
  observacion: string;

  @hasOne(() => Prestamo, {keyTo: 'idEntrada'})
  recibido: Prestamo;

  constructor(data?: Partial<Entrada>) {
    super(data);
  }
}

export interface EntradaRelations {
  // describe navigational properties here
}

export type EntradaWithRelations = Entrada & EntradaRelations;
