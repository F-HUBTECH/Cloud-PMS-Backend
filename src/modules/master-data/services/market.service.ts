import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Market } from '../entities/market.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class MarketService extends BaseMasterDataService<Market> {
  constructor(
    @InjectRepository(Market)
    repository: Repository<Market>,
  ) {
    super(repository, 'Market');
  }
}
