import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('mst_bed_type')
@Index('idx_mst_bed_type_hotel_id', ['hotelId'])
export class BedType extends BaseEntity {
  @Column({ name: 'hotel_id', type: 'uuid' })
  hotelId: string;

  @Column({ name: 'bed_code', length: 10, nullable: true })
  bedCode: string;

  @Column({ name: 'bed_name', length: 100, nullable: true })
  bedName: string;
}
