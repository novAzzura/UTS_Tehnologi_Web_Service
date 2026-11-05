import { Module } from '@nestjs/common';
import { KaryawanController } from './karyawan.controller';
import { KaryawanService } from './karyawan.service';
import { KaryawanResolver } from './karyawan.resolver';

@Module({
  controllers: [KaryawanController],
  providers: [KaryawanService, KaryawanResolver],
})
export class KaryawanModule {}