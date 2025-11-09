import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AbfTypeService } from '../services/abf-type.service';
import { CreateAbfTypeDto, UpdateAbfTypeDto } from '../dto/abf-type.dto';
import { AbfType } from '../entities/abf-type.entity';

@ApiTags('Master Data - ABF Types')
@ApiBearerAuth()
@Controller('master-data/abf-types')
export class AbfTypeController {
  constructor(private readonly abfTypeService: AbfTypeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new ABF type' })
  @ApiResponse({ status: 201, description: 'ABF type created successfully', type: AbfType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateAbfTypeDto): Promise<AbfType> {
    return this.abfTypeService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all ABF types' })
  @ApiResponse({ status: 200, description: 'List of ABF types retrieved successfully', type: [AbfType] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<AbfType[]> {
    return this.abfTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get ABF type by ID' })
  @ApiResponse({ status: 200, description: 'ABF type found', type: AbfType })
  @ApiResponse({ status: 404, description: 'ABF type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<AbfType> {
    return this.abfTypeService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update ABF type by ID' })
  @ApiResponse({ status: 200, description: 'ABF type updated successfully', type: AbfType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'ABF type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateAbfTypeDto): Promise<AbfType> {
    return this.abfTypeService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete ABF type by ID' })
  @ApiResponse({ status: 204, description: 'ABF type deleted successfully' })
  @ApiResponse({ status: 404, description: 'ABF type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.abfTypeService.remove(id);
  }
}
