import { Test, TestingModule } from '@nestjs/testing';
import { SetResultsService } from './set-results.service';

describe('SetResultsService', () => {
  let service: SetResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetResultsService],
    }).compile();

    service = module.get<SetResultsService>(SetResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
