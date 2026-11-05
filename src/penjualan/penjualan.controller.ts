import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { PenjualanService } from './penjualan.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';


@Controller('penjualan')
export class PenjualanController {
  constructor(
    private readonly penjualanService: PenjualanService,
  ) {}

    @Post()
    create(
        @Body() data: CreatePenjualanDto
    ) {
        return this.penjualanService.create(data);
    }

    @Get(':karyawanId')
    findAll(
        @Param('karyawanId', ParseIntPipe) karyawanId: number,
    ) {
        return this.penjualanService.findAll(karyawanId);
    }

    @Get(':penjualanId')
    findOne(
        @Param('karyawanId', ParseIntPipe) karyawanId: number,
        @Param('penjualanId', ParseIntPipe) penjualanId: number,
    ) {
        return this.penjualanService.findOne(karyawanId, penjualanId);
    }

    @Put(':penjualanId')
    update(
        @Param('penjualanId', ParseIntPipe) id: number,
        @Body() data: UpdatePenjualanDto,
    ) {
        return this.penjualanService.update(id, data);
    }

    @Delete(':penjualanId')
    remove(
        @Param('penjualanId', ParseIntPipe) id: number,
    ) {
        return this.penjualanService.remove(id);
    }
}