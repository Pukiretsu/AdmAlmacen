import {Entity, model, property} from '@loopback/repository';
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

  constructor(data?: Partial<Entrada>) {
    super(data);
  }
}

