
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { KaryawanService } from './karyawan.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';

@Controller('karyawan')
export class KaryawanController {
  constructor(
    private readonly karyawanService: KaryawanService,
  ) {}

  // POST: Menambahkan karyawan
  @Post()
  create(@Body() data: CreateKaryawanDto) {
    return this.karyawanService.create(data);
  }

  // GET: Mengambil karyawan beserta riwayatnya
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.karyawanService.findOne(id);
  }
}
