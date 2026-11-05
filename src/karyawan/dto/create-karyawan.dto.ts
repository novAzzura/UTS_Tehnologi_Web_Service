
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
} from 'class-validator';

export class CreateKaryawanDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  jabatan: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
