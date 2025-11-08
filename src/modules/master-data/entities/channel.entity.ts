import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_channel', { schema: 'mdm' })
export class Channel {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'OTA' })
  @Column({ name: 'channel_code', length: 10, nullable: true })
  channelCode: string;

  @ApiProperty({ example: 'Online Travel Agency' })
  @Column({ name: 'channel_name', length: 100, nullable: true })
  channelName: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
