import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import JwtData from 'src/domain/interfaces/jwtData';
import { UserRepositoryService } from 'src/repositories/user-repository.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserRepositoryService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtData) {
    const user = await this.usersService.getById(payload.id as number);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
