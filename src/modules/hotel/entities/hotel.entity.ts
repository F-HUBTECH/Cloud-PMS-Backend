import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('mst_hotel')
export class Hotel extends BaseEntity {
  @Column({ name: 'hotel_code', unique: true, length: 10, nullable: true })
  hotelCode: string;

  @Column({ name: 'hotel_name', length: 255 })
  hotelName: string;
}
