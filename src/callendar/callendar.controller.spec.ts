import { Test, TestingModule } from '@nestjs/testing';
import { CallendarController } from './callendar.controller';

describe('Callendar Controller', () => {
  let controller: CallendarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallendarController],
    }).compile();

    controller = module.get<CallendarController>(CallendarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
