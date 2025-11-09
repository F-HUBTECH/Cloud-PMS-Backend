import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RateMasterService } from '../services/rate-master.service';
import { CreateRateMasterDto, UpdateRateMasterDto } from '../dto/rate-master.dto';
import { RateMaster } from '../entities/rate-master.entity';

@ApiTags('Master Data - Rate Masters')
@ApiBearerAuth()
@Controller('master-data/rate-masters')
export class RateMasterController {
  constructor(private readonly rateMasterService: RateMasterService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new rate master' })
  @ApiResponse({ status: 201, description: 'Rate master created successfully', type: RateMaster })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateRateMasterDto): Promise<RateMaster> {
    return this.rateMasterService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all rate masters' })
  @ApiResponse({ status: 200, description: 'List of rate masters retrieved successfully', type: [RateMaster] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<RateMaster[]> {
    return this.rateMasterService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get rate master by ID' })
  @ApiResponse({ status: 200, description: 'Rate master found', type: RateMaster })
  @ApiResponse({ status: 404, description: 'Rate master not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<RateMaster> {
    return this.rateMasterService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update rate master by ID' })
  @ApiResponse({ status: 200, description: 'Rate master updated successfully', type: RateMaster })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Rate master not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateRateMasterDto): Promise<RateMaster> {
    return this.rateMasterService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete rate master by ID' })
  @ApiResponse({ status: 204, description: 'Rate master deleted successfully' })
  @ApiResponse({ status: 404, description: 'Rate master not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.rateMasterService.remove(id);
  }
}
