import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Building } from './building.entity';

@Entity('mst_floor')
export class Floor extends BaseEntity {
  @Column({ name: 'building_id', type: 'uuid', nullable: true })
  buildingId: string;

  @ManyToOne(() => Building, (building) => building.floors)
  @JoinColumn({ name: 'building_id' })
  building: Building;

  @Column({ name: 'floor_name', length: 50, nullable: true })
  floorName: string;
}
