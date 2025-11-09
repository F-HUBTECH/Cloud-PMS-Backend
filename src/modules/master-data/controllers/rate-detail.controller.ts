import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RateDetailService } from '../services/rate-detail.service';
import { CreateRateDetailDto, UpdateRateDetailDto } from '../dto/rate-detail.dto';
import { RateDetail } from '../entities/rate-detail.entity';

@ApiTags('Master Data - Rate Details')
@ApiBearerAuth()
@Controller('master-data/rate-details')
export class RateDetailController {
  constructor(private readonly rateDetailService: RateDetailService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new rate detail' })
  @ApiResponse({ status: 201, description: 'Rate detail created successfully', type: RateDetail })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateRateDetailDto): Promise<RateDetail> {
    return this.rateDetailService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all rate details' })
  @ApiResponse({ status: 200, description: 'List of rate details retrieved successfully', type: [RateDetail] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<RateDetail[]> {
    return this.rateDetailService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get rate detail by ID' })
  @ApiResponse({ status: 200, description: 'Rate detail found', type: RateDetail })
  @ApiResponse({ status: 404, description: 'Rate detail not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<RateDetail> {
    return this.rateDetailService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update rate detail by ID' })
  @ApiResponse({ status: 200, description: 'Rate detail updated successfully', type: RateDetail })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Rate detail not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateRateDetailDto): Promise<RateDetail> {
    return this.rateDetailService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete rate detail by ID' })
  @ApiResponse({ status: 204, description: 'Rate detail deleted successfully' })
  @ApiResponse({ status: 404, description: 'Rate detail not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.rateDetailService.remove(id);
  }
}
