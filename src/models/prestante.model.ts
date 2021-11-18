import {model, property, hasMany} from '@loopback/repository';
import {Persona} from '.';
import {Prestamo} from './prestamo.model';

@model()
export class Prestante extends Persona {

  @hasMany(() => Prestamo)
  prestamos: Prestamo[];

  constructor(data?: Partial<Prestante>) {
    super(data);
  }
}

export interface PrestanteRelations {
  // describe navigational properties here
}

export type PrestanteWithRelations = Prestante & PrestanteRelations;
