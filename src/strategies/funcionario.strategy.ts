import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';

export class EstratFuncionario implements AuthenticationStrategy {
  name = 'funcionario';

  constructor(
    @service(AutenticacionService)
    public authservice: AutenticacionService
  ) { }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    const token = parseBearerToken(request);
    if (token) {
      const data = this.authservice.tokenvalidation(token);
      if (data) {
        if (data.data.rol === 'funcionario' || data.data.rol === 'admin') {
          const profile: UserProfile = Object.assign(
            {
              id: data.data.id,
              nombre: data.data.name,
              rol: data.data.rol,
            })
          return profile
        }
        else
        {
          throw new HttpErrors[401]("Not authorised to do this action.")
        }
      }
      else {
        throw new HttpErrors[401]("Invalid Token.")
      }
    }
    else {
      throw new HttpErrors[401]("Token was not included on request.")
    }
  }
}
