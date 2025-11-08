import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { BuildingService } from '../services/building.service';
import { CreateBuildingDto, UpdateBuildingDto } from '../dto/building.dto';
import { Building } from '../entities/building.entity';

@ApiTags('Master Data - Buildings')
@ApiBearerAuth()
@Controller('master-data/buildings')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new building' })
  @ApiResponse({ status: 201, description: 'Building created successfully', type: Building })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateBuildingDto): Promise<Building> {
    return this.buildingService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all buildings' })
  @ApiResponse({ status: 200, description: 'List of buildings retrieved successfully', type: [Building] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Building[]> {
    return this.buildingService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get building by ID' })
  @ApiResponse({ status: 200, description: 'Building found', type: Building })
  @ApiResponse({ status: 404, description: 'Building not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Building> {
    return this.buildingService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update building by ID' })
  @ApiResponse({ status: 200, description: 'Building updated successfully', type: Building })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Building not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateBuildingDto): Promise<Building> {
    return this.buildingService.update(id, updateDto);
  }
}
