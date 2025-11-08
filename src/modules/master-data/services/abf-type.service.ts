import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbfType } from '../entities/abf-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class AbfTypeService extends BaseMasterDataService<AbfType> {
  constructor(
    @InjectRepository(AbfType)
    repository: Repository<AbfType>,
  ) {
    super(repository, 'ABF Type');
  }
}
