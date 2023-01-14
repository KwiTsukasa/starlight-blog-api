import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'myblog',
      entities: [__dirname + '/**/*.entity.js'],
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,ConfigService],
})
export class AppModule {}
