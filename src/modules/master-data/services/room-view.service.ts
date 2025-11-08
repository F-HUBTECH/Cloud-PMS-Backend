import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomView } from '../entities/room-view.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class RoomViewService extends BaseMasterDataService<RoomView> {
  constructor(
    @InjectRepository(RoomView)
    repository: Repository<RoomView>,
  ) {
    super(repository, 'Room View');
  }
}
