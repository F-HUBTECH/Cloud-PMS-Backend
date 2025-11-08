import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { FloorService } from '../services/floor.service';
import { CreateFloorDto, UpdateFloorDto } from '../dto/floor.dto';
import { Floor } from '../entities/floor.entity';

@ApiTags('Master Data - Floors')
@ApiBearerAuth()
@Controller('master-data/floors')
export class FloorController {
  constructor(private readonly floorService: FloorService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new floor' })
  @ApiResponse({ status: 201, description: 'Floor created successfully', type: Floor })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateFloorDto): Promise<Floor> {
    return this.floorService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all floors' })
  @ApiResponse({ status: 200, description: 'List of floors retrieved successfully', type: [Floor] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Floor[]> {
    return this.floorService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get floor by ID' })
  @ApiResponse({ status: 200, description: 'Floor found', type: Floor })
  @ApiResponse({ status: 404, description: 'Floor not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Floor> {
    return this.floorService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update floor by ID' })
  @ApiResponse({ status: 200, description: 'Floor updated successfully', type: Floor })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Floor not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateFloorDto): Promise<Floor> {
    return this.floorService.update(id, updateDto);
  }
}
