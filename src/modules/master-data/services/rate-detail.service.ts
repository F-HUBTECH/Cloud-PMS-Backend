import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RateDetail } from '../entities/rate-detail.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class RateDetailService extends BaseMasterDataService<RateDetail> {
  constructor(
    @InjectRepository(RateDetail)
    repository: Repository<RateDetail>,
  ) {
    super(repository, 'Rate Detail');
  }
}
