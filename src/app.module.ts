import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { ArticleModule } from './blog/article.module';
import { TagModule } from './tag/tag.module';
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
    GroupModule,
    ArticleModule,
    TagModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
