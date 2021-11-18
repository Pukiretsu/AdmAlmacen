import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const crypto = require('crypto-js');
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  cifrarPassword(paswd : string)
  {
    const cifrado = crypto.MD5(paswd).toString();
    return cifrado
  }
}
