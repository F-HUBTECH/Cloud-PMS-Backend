import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_title', { schema: 'mdm' })
export class Title {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @ApiProperty({ example: 'MR' })
  @Column({ name: 'title_code', length: 10, nullable: true })
  titleCode: string;

  @ApiProperty({ example: 'Mr.' })
  @Column({ name: 'title_name', length: 50, nullable: true })
  titleName: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
