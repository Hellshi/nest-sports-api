import { Test, TestingModule } from '@nestjs/testing';
import { SetResultsController } from './set-results.controller';
import { SetResultsService } from './set-results.service';

describe('SetResultsController', () => {
  let controller: SetResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetResultsController],
      providers: [SetResultsService],
    }).compile();

    controller = module.get<SetResultsController>(SetResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
