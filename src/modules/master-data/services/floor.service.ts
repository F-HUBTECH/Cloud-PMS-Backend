import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Floor } from '../entities/floor.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class FloorService extends BaseMasterDataService<Floor> {
  constructor(
    @InjectRepository(Floor)
    repository: Repository<Floor>,
  ) {
    super(repository, 'Floor');
  }
}
