import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_market', { schema: 'mdm' })
export class Market {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @ApiProperty({ example: 'CORP' })
  @Column({ name: 'market_code', length: 10, nullable: true })
  marketCode: string;

  @ApiProperty({ example: 'Corporate' })
  @Column({ name: 'market_name', length: 100, nullable: true })
  marketName: string;

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
