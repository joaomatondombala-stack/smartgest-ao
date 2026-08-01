import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UserModule } from '../user/user.module';


@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'smartgest-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
 
})
export class AuthModule {}
