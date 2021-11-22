import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {keys} from '../keys/keys';
import {Funcionario} from '../models';
import {FuncionarioRepository} from '../repositories';

const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(FuncionarioRepository)
    public frepo: FuncionarioRepository
  ) { }



  cifrarPassword(paswd: string) {
    const cifrado = crypto.MD5(paswd).toString();
    return cifrado
  }

  identificar(cedula: string, placa: string, psswd: string) {
    try {
      const f = this.frepo.findOne({where: {cedula: cedula, placa: placa, password: psswd, }});
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (f) {
        return f;
      }
      return false;
    } catch {
      return false;
    }
  }

  jwtToken(funcionario: Funcionario) {
    const token = jwt.sign(
      {
        data:
        {
          id: funcionario.id,
          placa: funcionario.placa,
          nombre: funcionario.nombre + " " + funcionario.apellidos,
        }
      }, keys.jwtkey);
    return token;
  }
  tokenvalidation(token: string) {
    try {
      const data = jwt.verify(token, keys.jwtkey);
      return data;
    } catch {
      return false
    }
  }
}

