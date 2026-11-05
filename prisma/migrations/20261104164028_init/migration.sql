-- CreateTable
CREATE TABLE `Karyawan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Karyawan_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absensi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `karyawanId` INTEGER NOT NULL,
    `tanggal_absensi` DATETIME(3) NOT NULL,
    `status_kehadiran` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Absensi_karyawanId_idx`(`karyawanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penjualan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `karyawanId` INTEGER NOT NULL,
    `total_pendapatan` DOUBLE NOT NULL,
    `tanggal_transaksi` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Penjualan_karyawanId_idx`(`karyawanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Absensi` ADD CONSTRAINT `Absensi_karyawanId_fkey` FOREIGN KEY (`karyawanId`) REFERENCES `Karyawan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjualan` ADD CONSTRAINT `Penjualan_karyawanId_fkey` FOREIGN KEY (`karyawanId`) REFERENCES `Karyawan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
