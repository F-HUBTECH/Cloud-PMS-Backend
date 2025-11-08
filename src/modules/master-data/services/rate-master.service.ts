import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RateMaster } from '../entities/rate-master.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class RateMasterService extends BaseMasterDataService<RateMaster> {
  constructor(
    @InjectRepository(RateMaster)
    repository: Repository<RateMaster>,
  ) {
    super(repository, 'Rate Master');
  }
}
