import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*import { User } from './user/entities/user.entity';*/
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'JAMbala@25',
    database: 'smartgest',
    autoLoadEntities: true,
    /*entities: [User],*/
    synchronize: true,
  }),
UserModule,
AuthModule,
CustomerModule,
],
  /*imports: [AuthModule, UserModule],*/
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
