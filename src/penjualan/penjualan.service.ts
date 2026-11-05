import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/create-penjualan.dto';  

@Injectable()
export class PenjualanService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // Menambahkan data penjualan
    async create(data: CreatePenjualanDto) {
        const karyawan = await this.prisma.karyawan.findUnique({
            where: { id: data.karyawanId },
        });

        if (!karyawan) {
            throw new NotFoundException('Karyawan tidak ditemukan');
        }

        return this.prisma.penjualan.create({
            data: {
                karyawanId: data.karyawanId,
                total_pendapatan: data.total_pendapatan,
                tanggal_transaksi: new Date(data.tanggal_transaksi),
            },
        });
    }

  // Mengambil seluruh penjualan Karyawan
    async findAll(karyawanId: number) {
        const karyawan = await this.prisma.karyawan.findUnique({
            where: { id: karyawanId },
        });

        if (!karyawan) {
            throw new NotFoundException('Karyawan tidak ditemukan');
        }

        return this.prisma.penjualan.findMany({
            where: { karyawanId },
        });
    }

  // Mengambil satu penjualan berdasarkan ID
    async findOne(karyawanId: number, penjualanId: number) {
        const penjualan = await this.prisma.penjualan.findFirst({
            where: {
                id: penjualanId,
                karyawanId,
            },
        });

        if (!penjualan) {
            throw new NotFoundException('Data penjualan tidak ditemukan');
        }

        return penjualan;
    }

    async update(id: number, data: UpdatePenjualanDto) {
        const penjualan = await this.prisma.penjualan.findUnique({
            where: { id },
        });

        if (!penjualan) {
            throw new NotFoundException('Data penjualan tidak ditemukan');
        }

        return this.prisma.penjualan.update({
            where: { id },data: {
                total_pendapatan: data.total_pendapatan,
                tanggal_transaksi: new Date(data.tanggal_transaksi),
            },
        });
    }

    async remove(id: number) {
        const penjualan = await this.prisma.penjualan.findUnique({
            where: { id },
        });

        if (!penjualan) {
            throw new NotFoundException('Data penjualan tidak ditemukan');
        }

        return this.prisma.penjualan.delete({
            where: { id },
        });
    }
 
}