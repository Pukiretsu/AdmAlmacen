import {Entity, model, property, hasOne} from '@loopback/repository';
import {Prestamo} from './prestamo.model';

@model()
export class Salida extends Entity {
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

  @hasOne(() => Prestamo, {keyTo: 'idSalida'})
  salida: Prestamo;

  constructor(data?: Partial<Salida>) {
    super(data);
  }
}

export interface SalidaRelations {
  // describe navigational properties here
}

export type SalidaWithRelations = Salida & SalidaRelations;
