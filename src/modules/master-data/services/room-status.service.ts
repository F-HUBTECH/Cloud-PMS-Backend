import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomStatus } from '../entities/room-status.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class RoomStatusService extends BaseMasterDataService<RoomStatus> {
  constructor(
    @InjectRepository(RoomStatus)
    repository: Repository<RoomStatus>,
  ) {
    super(repository, 'Room Status');
  }
}
