import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MarketService } from '../services/market.service';
import { CreateMarketDto, UpdateMarketDto } from '../dto/market.dto';
import { Market } from '../entities/market.entity';

@ApiTags('Master Data - Markets')
@ApiBearerAuth()
@Controller('master-data/markets')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new market' })
  @ApiResponse({ status: 201, description: 'Market created successfully', type: Market })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateMarketDto): Promise<Market> {
    return this.marketService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all markets' })
  @ApiResponse({ status: 200, description: 'List of markets retrieved successfully', type: [Market] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Market[]> {
    return this.marketService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get market by ID' })
  @ApiResponse({ status: 200, description: 'Market found', type: Market })
  @ApiResponse({ status: 404, description: 'Market not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Market> {
    return this.marketService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update market by ID' })
  @ApiResponse({ status: 200, description: 'Market updated successfully', type: Market })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Market not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateMarketDto): Promise<Market> {
    return this.marketService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete market by ID' })
  @ApiResponse({ status: 204, description: 'Market deleted successfully' })
  @ApiResponse({ status: 404, description: 'Market not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.marketService.remove(id);
  }
}
