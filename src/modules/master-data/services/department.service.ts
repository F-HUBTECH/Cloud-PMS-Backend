import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';
import { BaseMasterDataService } from './base-master-data.service';

@Injectable()
export class DepartmentService extends BaseMasterDataService<Department> {
  constructor(
    @InjectRepository(Department)
    repository: Repository<Department>,
  ) {
    super(repository, 'Department');
  }
}
