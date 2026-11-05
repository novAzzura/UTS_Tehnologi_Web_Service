import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';

@Injectable()
export class KaryawanService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // Menambahkan data karyawan
  async create(data: CreateKaryawanDto) {
    return this.prisma.karyawan.create({
      data: {
        nama: data.nama,
        jabatan: data.jabatan,
        email: data.email,
      },
    });
  }

  // Mengambil satu karyawan beserta riwayat absensi dan penjualan
  // Mengambil satu karyawan beserta riwayat absensi dan penjualan
    async findOne(id: number) {
        const karyawan = await this.prisma.karyawan.findUnique({
        where: {
            id: id,
        },
        select: {
            nama: true,
            absensi: {
                select: {
                    status_kehadiran: true,
                },
            },
      penjualan: {
        select: {
          total_pendapatan: true,
        },
      },
    },
  });

  if (!karyawan) {
    throw new NotFoundException(
      'Karyawan tidak ditemukan',
    );
  }

  return karyawan;
}
}
