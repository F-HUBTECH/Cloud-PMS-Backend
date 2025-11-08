import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nationality } from '../entities/nationality.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class NationalityService extends BaseMasterDataService<Nationality> {
  constructor(
    @InjectRepository(Nationality)
    repository: Repository<Nationality>,
  ) {
    super(repository, 'Nationality');
  }
}
