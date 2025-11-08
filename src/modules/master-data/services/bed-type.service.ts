import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BedType } from '../entities/bed-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class BedTypeService extends BaseMasterDataService<BedType> {
  constructor(
    @InjectRepository(BedType)
    repository: Repository<BedType>,
  ) {
    super(repository, 'Bed Type');
  }
}
