import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomType } from '../entities/room-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class RoomTypeService extends BaseMasterDataService<RoomType> {
  constructor(
    @InjectRepository(RoomType)
    repository: Repository<RoomType>,
  ) {
    super(repository, 'Room Type');
  }
}
