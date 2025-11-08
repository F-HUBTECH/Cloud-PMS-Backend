import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuestType } from '../entities/guest-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class GuestTypeService extends BaseMasterDataService<GuestType> {
  constructor(
    @InjectRepository(GuestType)
    repository: Repository<GuestType>,
  ) {
    super(repository, 'Guest Type');
  }
}
