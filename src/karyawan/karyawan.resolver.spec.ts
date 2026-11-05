import { Test, TestingModule } from '@nestjs/testing';
import { KaryawanResolver } from './karyawan.resolver';

describe('KaryawanResolver', () => {
  let resolver: KaryawanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KaryawanResolver],
    }).compile();

    resolver = module.get<KaryawanResolver>(KaryawanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
