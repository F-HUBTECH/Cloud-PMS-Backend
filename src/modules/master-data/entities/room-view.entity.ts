import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_room_view', { schema: 'mdm' })
export class RoomView {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @ApiProperty({ example: 'SV' })
  @Column({ name: 'view_code', length: 10, nullable: true })
  viewCode: string;

  @ApiProperty({ example: 'Sea View' })
  @Column({ name: 'view_name', length: 100, nullable: true })
  viewName: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
