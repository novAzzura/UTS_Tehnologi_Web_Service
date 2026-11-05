import { IsInt, IsDateString, IsString } from 'class-validator';

export class CreateAbsensiDto {
  @IsInt({ message: 'karyawanId harus berupa angka bulat' })
  karyawanId: number;

  @IsDateString(
    {},
    { message: 'tanggal_absensi harus berformat tanggal ISO' },
  )
  tanggal_absensi: string;

  @IsString({ message: 'status_kehadiran harus berupa teks' })
  status_kehadiran: string;
}