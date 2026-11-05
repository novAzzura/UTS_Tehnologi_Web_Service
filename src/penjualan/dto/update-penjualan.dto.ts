import {
  IsNumber,
  IsDateString,
  Min,
} from 'class-validator';

export class UpdatePenjualanDto {
    @IsNumber()
    @Min(0)
    total_pendapatan: number;

    @IsDateString()
    tanggal_transaksi: string;
}