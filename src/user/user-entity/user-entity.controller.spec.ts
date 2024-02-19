import { Test, TestingModule } from '@nestjs/testing';
import { UserEntityController } from './user-entity.controller';

describe('EntityController', () => {
  let controller: UserEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEntityController],
    }).compile();

    controller = module.get<UserEntityController>(UserEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
