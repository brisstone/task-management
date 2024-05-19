import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   constructor() {
  //     super();
  //   }

  private readonly logger = new Logger(JwtAuthGuard.name);

  handleRequest(err, user, info) {
    this.logger.debug(
      `JWT Auth Guard - User: ${JSON.stringify(user)}, Info: ${info}`,
    );
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
