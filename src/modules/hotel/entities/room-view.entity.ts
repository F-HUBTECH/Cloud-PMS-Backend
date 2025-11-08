import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('mst_room_view')
@Index('idx_mst_room_view_hotel_id', ['hotelId'])
export class RoomView extends BaseEntity {
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @Column({ name: 'view_code', length: 10, nullable: true })
  viewCode: string;

  @Column({ name: 'view_name', length: 100, nullable: true })
  viewName: string;
}
