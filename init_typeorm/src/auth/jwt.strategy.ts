import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'SECRET_KEY', // Usa variable de entorno o valor por defecto
    });
  }

  async validate(payload: any) {
    // Aquí puedes agregar lógica extra si querés verificar algo más o cargar usuario desde DB
    return { userId: payload.sub, username: payload.username };
  }
}

