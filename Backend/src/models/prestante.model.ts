import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'string',
    required: false,
  })
  prestamos: string;
  /* Json {"prestamos":[{"idprestamo": id, "estado":"prestado"}]} */

  constructor(data?: Partial<Prestante>) {
    super(data);
  }
}
