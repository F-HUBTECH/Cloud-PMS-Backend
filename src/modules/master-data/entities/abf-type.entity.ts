import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_abf_type', { schema: 'mdm' })
export class AbfType {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @ApiProperty({ example: 'ABF' })
  @Column({ name: 'abf_code', length: 10, nullable: true })
  abfCode: string;

  @ApiProperty({ example: 'American Breakfast' })
  @Column({ name: 'abf_name', length: 100, nullable: true })
  abfName: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
