import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import { AbsensiModule } from './absensi/absensi.module';
import { PenjualanModule } from './penjualan/penjualan.module';
import { PrismaModule } from './prisma/prisma.module';
import { KaryawanModule } from './karyawan/karyawan.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    AbsensiModule, 
    PenjualanModule, 
    PrismaModule,
    KaryawanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
