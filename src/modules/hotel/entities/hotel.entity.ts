import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_hotel', { schema: 'mdm' })
export class Hotel extends BaseEntity {
  @Column({ name: 'hotel_code', unique: true, length: 10, nullable: true })
  hotelCode: string;

  @Column({ name: 'hotel_name', length: 255 })
  hotelName: string;

  @ApiProperty({
    description: 'สถานะการใช้งาน (true = ใช้งาน, false = ปิดการใช้งาน)',
    example: true,
  })
  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;
}
