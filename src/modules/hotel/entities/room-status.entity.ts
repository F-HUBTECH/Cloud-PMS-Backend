import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('mst_room_status')
@Index('idx_mst_room_status_hotel_id', ['hotelId'])
export class RoomStatus extends BaseEntity {
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @Column({ name: 'status_code', length: 10, nullable: true })
  statusCode: string;

  @Column({ name: 'status_name', length: 100, nullable: true })
  statusName: string;
}
