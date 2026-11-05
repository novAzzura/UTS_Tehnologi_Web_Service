import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class AbsensiType {
  @Field()
  status_kehadiran: string;
}

@ObjectType()
export class PenjualanType {
  @Field(() => Float)
  total_pendapatan: number;
}

@ObjectType()
export class KaryawanType {
  @Field()
  nama: string;

  @Field(() => [AbsensiType])
  absensi: AbsensiType[];

  @Field(() => [PenjualanType])
  penjualan: PenjualanType[];
}