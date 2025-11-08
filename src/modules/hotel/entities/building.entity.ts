import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Hotel } from './hotel.entity';
import { Floor } from './floor.entity';

@Entity('mst_building')
export class Building extends BaseEntity {
  @Column({ name: 'hotel_id', type: 'uuid', nullable: true })
  hotelId: string;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @Column({ name: 'building_name', length: 100, nullable: true })
  buildingName: string;

  @OneToMany(() => Floor, (floor) => floor.building)
  floors: Floor[];
}
