import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransCode } from '../entities/trans-code.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class TransCodeService extends BaseMasterDataService<TransCode> {
  constructor(
    @InjectRepository(TransCode)
    repository: Repository<TransCode>,
  ) {
    super(repository, 'Transaction Code');
  }
}
