
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { AbsensiService } from './absensi.service';

@Controller('karyawan/:karyawanId/absensi')
export class AbsensiController {
  constructor(private readonly absensiService: AbsensiService) {}

  // Endpoint 1: Mengambil seluruh data absensi
  @Get()
  findAll(
    @Param('karyawanId', ParseIntPipe) karyawanId: number,
  ) {
    return this.absensiService.findAll(karyawanId);
  }

  // Endpoint 2: Mengambil satu data absensi
  @Get(':absensiId')
  findOne(
    @Param('karyawanId', ParseIntPipe) karyawanId: number,
    @Param('absensiId', ParseIntPipe) absensiId: number,
  ) {
    return this.absensiService.findOne(karyawanId, absensiId);
  }

  // Endpoint 3: Menambahkan data absensi
  @Post()
  create(
    @Param('karyawanId', ParseIntPipe) karyawanId: number,
    @Body() data: any,
  ) {
    return this.absensiService.create(karyawanId, data);
  }
}
