import { Module } from '@nestjs/common';
import { CallendarController } from './callendar.controller';

@Module({
  controllers: [CallendarController],
})
export class CallendarModule {}
