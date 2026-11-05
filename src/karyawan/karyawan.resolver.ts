import {
  Resolver,
  Query,
  Args,
  Int,
} from '@nestjs/graphql';

import { KaryawanService } from './karyawan.service';
import { KaryawanType } from './graphQL/karyawan.type';

@Resolver(() => KaryawanType)
export class KaryawanResolver {
  constructor(
    private readonly karyawanService: KaryawanService,
  ) {}

  @Query(() => KaryawanType, { name: 'karyawan' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.karyawanService.findOne(id);
  }
}