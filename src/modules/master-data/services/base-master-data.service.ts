import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class BaseMasterDataService<T> {
  constructor(
    protected readonly repository: Repository<T>,
    protected readonly entityName: string,
  ) {}

  async create(createDto: any): Promise<T> {
    try {
      const entity = this.repository.create(createDto);
      const saved = await this.repository.save(entity);
      return Array.isArray(saved) ? saved[0] : saved;
    } catch (error) {
      if (error.code === '23505') { // Unique violation
        throw new BadRequestException(`${this.entityName} with this code already exists`);
      }
      throw new InternalServerErrorException(`Failed to create ${this.entityName}`);
    }
  }

  async findAll(): Promise<T[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      throw new InternalServerErrorException(`Failed to fetch ${this.entityName} list`);
    }
  }

  async findOne(id: string): Promise<T> {
    try {
      const entity = await this.repository.findOne({ where: { id } as any });
      if (!entity) {
        throw new NotFoundException(`${this.entityName} with ID ${id} not found`);
      }
      return entity;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Failed to fetch ${this.entityName}`);
    }
  }

  async update(id: string, updateDto: any): Promise<T> {
    try {
      const entity = await this.findOne(id);
      Object.assign(entity, updateDto);
      const saved = await this.repository.save(entity);
      return Array.isArray(saved) ? saved[0] : saved;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === '23505') {
        throw new BadRequestException(`${this.entityName} with this code already exists`);
      }
      throw new InternalServerErrorException(`Failed to update ${this.entityName}`);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const entity = await this.findOne(id);
      await this.repository.remove(entity);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Failed to delete ${this.entityName}`);
    }
  }
}
