import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallendarModule } from './callendar/callendar.module';

@Module({
  imports: [CallendarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
