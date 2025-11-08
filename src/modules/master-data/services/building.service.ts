import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from '../entities/building.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class BuildingService extends BaseMasterDataService<Building> {
  constructor(
    @InjectRepository(Building)
    repository: Repository<Building>,
  ) {
    super(repository, 'Building');
  }
}
