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
  @Column({ name: 'tran_code', length: 10, nullable: true })
  tranCode: string;

  @ApiProperty({ example: 'Room Charge' })
  @Column({ name: 'description', length: 255, nullable: true })
  description: string;

  @ApiProperty({ example: 7.00 })
  @Column({ name: 'vat_percent', type: 'decimal', precision: 5, scale: 2, default: 0 })
  vatPercent: number;

  @ApiProperty({ example: 10.00 })
  @Column({ name: 'service_percent', type: 'decimal', precision: 5, scale: 2, default: 0 })
  servicePercent: number;

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
