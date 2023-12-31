import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { mongoProvider } from './providers/mongo-provider';
import { photoProvider } from './providers/photo.provider';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, mongoProvider, photoProvider],
})
export class AppModule {}
