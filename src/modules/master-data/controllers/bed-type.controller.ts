import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { BedTypeService } from '../services/bed-type.service';
import { CreateBedTypeDto, UpdateBedTypeDto } from '../dto/bed-type.dto';
import { BedType } from '../entities/bed-type.entity';

@ApiTags('Master Data - Bed Types')
@ApiBearerAuth()
@Controller('master-data/bed-types')
export class BedTypeController {
  constructor(private readonly bedTypeService: BedTypeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new bed type' })
  @ApiResponse({ status: 201, description: 'Bed type created successfully', type: BedType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateBedTypeDto): Promise<BedType> {
    return this.bedTypeService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all bed types' })
  @ApiResponse({ status: 200, description: 'List of bed types retrieved successfully', type: [BedType] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<BedType[]> {
    return this.bedTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get bed type by ID' })
  @ApiResponse({ status: 200, description: 'Bed type found', type: BedType })
  @ApiResponse({ status: 404, description: 'Bed type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<BedType> {
    return this.bedTypeService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update bed type by ID' })
  @ApiResponse({ status: 200, description: 'Bed type updated successfully', type: BedType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Bed type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateBedTypeDto): Promise<BedType> {
    return this.bedTypeService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete bed type by ID' })
  @ApiResponse({ status: 204, description: 'Bed type deleted successfully' })
  @ApiResponse({ status: 404, description: 'Bed type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.bedTypeService.remove(id);
  }
}
