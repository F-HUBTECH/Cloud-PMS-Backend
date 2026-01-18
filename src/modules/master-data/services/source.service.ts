import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Source } from '../entities/source.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class SourceService extends BaseMasterDataService<Source> {
    constructor(
        @InjectRepository(Source)
        repository: Repository<Source>,
    ) {
        super(repository, 'Source');
    }
}
