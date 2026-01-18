import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SettleType } from '../entities/settle-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class SettleTypeService extends BaseMasterDataService<SettleType> {
    constructor(
        @InjectRepository(SettleType)
        repository: Repository<SettleType>,
    ) {
        super(repository, 'Settle Type');
    }
}
