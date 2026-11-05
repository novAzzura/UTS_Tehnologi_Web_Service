import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateAbsensiDto } from './dto/create-absensi.dto';

@Injectable()
export class AbsensiService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // Mengambil seluruh absensi milik karyawan
  async findAll(karyawanId: number) {
    const karyawan = await this.prisma.karyawan.findUnique({
      where: { id: karyawanId },
    });

    if (!karyawan) {
      throw new NotFoundException(
        'Karyawan tidak ditemukan',
      );
    }

    return this.prisma.absensi.findMany({
      where: { karyawanId: karyawanId },
    });
  }

  // Mengambil satu absensi milik karyawan
  async findOne(karyawanId: number, absensiId: number) {
    const absensi = await this.prisma.absensi.findFirst({
      where: {
        id: absensiId,
        karyawanId: karyawanId,
      },
    });

    if (!absensi) {
      throw new NotFoundException(
        'Data absensi tidak ditemukan',
      );
    }

    return absensi;
  }

  // Menambahkan data absensi
  async create(karyawanId: number, data: CreateAbsensiDto) {
    const karyawan = await this.prisma.karyawan.findUnique({
      where: { id: karyawanId },
    });

    if (!karyawan) {
      throw new NotFoundException(
        'Karyawan tidak ditemukan',
      );
    }

    return this.prisma.absensi.create({
      data: {
        karyawanId: karyawanId,
        tanggal_absensi: new Date(data.tanggal_absensi),
        status_kehadiran: data.status_kehadiran,
      },
    });
  }
}
