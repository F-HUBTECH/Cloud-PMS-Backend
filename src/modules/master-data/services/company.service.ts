import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class CompanyService extends BaseMasterDataService<Company> {
  constructor(
    @InjectRepository(Company)
    repository: Repository<Company>,
  ) {
    super(repository, 'Company');
  }
}
