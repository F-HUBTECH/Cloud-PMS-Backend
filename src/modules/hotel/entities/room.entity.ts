import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { RoomType } from './room-type.entity';
import { Floor } from './floor.entity';
import { RoomStatus } from './room-status.entity';
import { RoomView } from './room-view.entity';
import { BedType } from './bed-type.entity';

@Entity('mst_room')
@Index('idx_mst_room_hotel_id', ['hotelId'])
export class Room extends BaseEntity {
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @Column({ name: 'room_no', unique: true, length: 20, nullable: true })
  roomNo: string;

  @Column({ name: 'room_type_id', type: 'uuid', nullable: true })
  roomTypeId: string;

  @ManyToOne(() => RoomType)
  @JoinColumn({ name: 'room_type_id' })
  roomType: RoomType;

  @Column({ name: 'floor_id', type: 'uuid', nullable: true })
  floorId: string;

  @ManyToOne(() => Floor)
  @JoinColumn({ name: 'floor_id' })
  floor: Floor;

  @Column({ name: 'room_status_id', type: 'uuid', nullable: true })
  roomStatusId: string;

  @ManyToOne(() => RoomStatus)
  @JoinColumn({ name: 'room_status_id' })
  roomStatus: RoomStatus;

  @Column({ name: 'room_view_id', type: 'uuid', nullable: true })
  roomViewId: string;

  @ManyToOne(() => RoomView)
  @JoinColumn({ name: 'room_view_id' })
  roomView: RoomView;

  @Column({ name: 'bed_type_id', type: 'uuid', nullable: true })
  bedTypeId: string;

  @ManyToOne(() => BedType)
  @JoinColumn({ name: 'bed_type_id' })
  bedType: BedType;
}
