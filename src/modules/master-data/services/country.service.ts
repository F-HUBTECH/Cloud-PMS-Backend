import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../entities/country.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class CountryService extends BaseMasterDataService<Country> {
  constructor(
    @InjectRepository(Country)
    repository: Repository<Country>,
  ) {
    super(repository, 'Country');
  }
}
