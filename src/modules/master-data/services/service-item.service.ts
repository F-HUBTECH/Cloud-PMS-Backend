import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceItem } from '../entities/service-item.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class ServiceItemService extends BaseMasterDataService<ServiceItem> {
    constructor(
        @InjectRepository(ServiceItem)
        repository: Repository<ServiceItem>,
    ) {
        super(repository, 'Service Item');
    }
}
