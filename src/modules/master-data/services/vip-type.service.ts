import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VipType } from '../entities/vip-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class VipTypeService extends BaseMasterDataService<VipType> {
  constructor(
    @InjectRepository(VipType)
    repository: Repository<VipType>,
  ) {
    super(repository, 'VIP Type');
  }
}
