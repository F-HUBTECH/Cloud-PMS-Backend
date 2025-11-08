import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Title } from '../entities/title.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class TitleService extends BaseMasterDataService<Title> {
  constructor(
    @InjectRepository(Title)
    repository: Repository<Title>,
  ) {
    super(repository, 'Title');
  }
}
