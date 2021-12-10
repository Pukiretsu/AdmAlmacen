import {Entity, model, property} from '@loopback/repository';

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
  idprestamo: string;

  @property({
    type: 'string',
    required: true,
  })
  observacion: string;

  constructor(data?: Partial<Salida>) {
    super(data);
  }
}
