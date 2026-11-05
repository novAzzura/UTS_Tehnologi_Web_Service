import { IsInt, IsNumber, Min, IsDateString } from 'class-validator';

export class CreatePenjualanDto {
  @IsInt({ message: 'karyawanId harus berupa angka bulat' })
  karyawanId: number;

  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'total_pendapatan harus berupa angka' },
  )
  @Min(0, { message: 'total_pendapatan minimal 0' })
  total_pendapatan: number;

  @IsDateString(
    {},
    { message: 'tanggal_transaksi harus berformat tanggal ISO' },
  )
  tanggal_transaksi: string;
}

export class UpdatePenjualanDto {
  @IsNumber()
  @Min(0)
  total_pendapatan: number;

  @IsDateString()
  tanggal_transaksi: string;
}