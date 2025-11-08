import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_trans_code', { schema: 'mdm' })
export class TransCode {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @ApiProperty({ example: 'ROOM' })
  @Column({ name: 'trans_code', length: 10 })
  transCode: string;

  @ApiProperty({ example: 'Room Charge' })
  @Column({ name: 'trans_name', length: 255 })
  transName: string;

  @ApiProperty({ example: 7.00 })
  @Column({ name: 'vat_percent', type: 'decimal', precision: 5, scale: 2, default: 0.00, nullable: true })
  vatPercent: number;

  @ApiProperty({ example: 10.00 })
  @Column({ name: 'service_percent', type: 'decimal', precision: 5, scale: 2, default: 0.00, nullable: true })
  servicePercent: number;

  @ApiProperty({ example: 'T' })
  @Column({ name: 'tran_type', type: 'char', length: 1, default: 'T', nullable: true })
  tranType: string;

  @ApiProperty({ example: 'GRP01' })
  @Column({ name: 'group_id', length: 10, nullable: true })
  groupId: string;

  @ApiProperty({ example: 'VAT1' })
  @Column({ name: 'vat_type', length: 5, nullable: true })
  vatType: string;

  @ApiProperty({ example: true })
  @Column({ name: 'is_taxable', type: 'boolean', default: true, nullable: true })
  isTaxable: boolean;

  @ApiProperty({ example: false })
  @Column({ name: 'is_rebate', type: 'boolean', default: false, nullable: true })
  isRebate: boolean;

  @ApiProperty({ example: false })
  @Column({ name: 'is_city_ledger', type: 'boolean', default: false, nullable: true })
  isCityLedger: boolean;

  @ApiProperty({ example: false })
  @Column({ name: 'is_deposit', type: 'boolean', default: false, nullable: true })
  isDeposit: boolean;

  @ApiProperty({ example: true })
  @Column({ name: 'allow_manual_post', type: 'boolean', default: true, nullable: true })
  allowManualPost: boolean;

  @ApiProperty({ example: false })
  @Column({ name: 'require_refer', type: 'boolean', default: false, nullable: true })
  requireRefer: boolean;

  @ApiProperty({ example: false })
  @Column({ name: 'require_remark', type: 'boolean', default: false, nullable: true })
  requireRemark: boolean;

  @ApiProperty({ example: 'AR001' })
  @Column({ name: 'ar_transfer_code', length: 10, nullable: true })
  arTransferCode: string;

  @ApiProperty({ example: 'CASH' })
  @Column({ name: 'pay_type', length: 10, nullable: true })
  payType: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({
    description: 'สถานะการใช้งาน (true = ใช้งาน, false = ปิดการใช้งาน)',
    example: true,
  })
  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;
}
