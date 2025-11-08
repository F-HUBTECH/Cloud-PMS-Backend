import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Hotel } from './hotel.entity';

@Entity('mst_room_type')
export class RoomType extends BaseEntity {
  @Column({ name: 'hotel_id', type: 'uuid', nullable: true })
  hotelId: string;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @Column({ name: 'room_type_code', unique: true, length: 10, nullable: true })
  roomTypeCode: string;

  @Column({ name: 'room_type_name', length: 100, nullable: true })
  roomTypeName: string;
}
