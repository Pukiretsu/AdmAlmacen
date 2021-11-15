import {model, property} from '@loopback/repository';
import {Persona} from '.';

@model()
export class Admin extends Persona {

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
