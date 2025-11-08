import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Channel } from '../entities/channel.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class ChannelService extends BaseMasterDataService<Channel> {
  constructor(
    @InjectRepository(Channel)
    repository: Repository<Channel>,
  ) {
    super(repository, 'Channel');
  }
}
