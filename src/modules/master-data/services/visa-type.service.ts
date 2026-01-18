import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisaType } from '../entities/visa-type.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class VisaTypeService extends BaseMasterDataService<VisaType> {
    constructor(
        @InjectRepository(VisaType)
        repository: Repository<VisaType>,
    ) {
        super(repository, 'Visa Type');
    }
}
