import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  private readonly TOKEN_START_INDEX = 7;
  private readonly TOKEN_TYPE = 'Bearer';

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { headers } = ctx.getContext().req as Request;

    const authorizationHeader = headers.authorization;
    if (authorizationHeader === undefined) {
      this.logger.log('Authorization header is not found.');
      return false;
    }

    if (
      authorizationHeader.substring(0, this.TOKEN_START_INDEX - 1) !==
      this.TOKEN_TYPE
    ) {
      this.logger.log('Authorization type is invalid.');
      return false;
    }

    // Replace this with the real JwtService to verify a token.
    const isTokenValid = this.verifyJwtToken(
      authorizationHeader.substring(this.TOKEN_START_INDEX),
    );

    if (!isTokenValid) {
      this.logger.log('Unauthorized.');
      return false;
    }

    this.logger.log('Authorized.');
    return true;
  }

  // Mock function for validating Jwt Token whether or not valid.
  verifyJwtToken(token: string): boolean {
    return token !== '';
  }
}
