import {Entity, model, property} from '@loopback/repository';

@model()
export class Prestamo extends Entity {
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
  idSalida: string;

  @property({
    type: 'string',
    default: "no entregado",
  })
  idEntrada?: string;

  @property({
    type: 'string',
    required: true,
  })
  idPrestante: string;

  @property({
    type: 'string',
    required: true,
  })
  idElemento: string;

  @property({
    type: 'string',
    required: true,
  })
  servicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaSalida: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaEntrada: string;


  constructor(data?: Partial<Prestamo>) {
    super(data);
  }
}

export interface PrestamoRelations {
  // describe navigational properties here
}

export type PrestamoWithRelations = Prestamo & PrestamoRelations;
