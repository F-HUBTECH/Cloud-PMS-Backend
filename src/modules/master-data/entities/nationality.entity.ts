import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_nationality', { schema: 'mdm' })
export class Nationality {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @ApiProperty({ example: 'TH' })
  @Column({ name: 'nation_code', length: 10, nullable: true })
  nationCode: string;

  @ApiProperty({ example: 'Thai' })
  @Column({ name: 'nation_name', length: 100, nullable: true })
  nationName: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
