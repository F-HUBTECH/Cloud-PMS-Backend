import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VipTypeService } from '../services/vip-type.service';
import { CreateVipTypeDto, UpdateVipTypeDto } from '../dto/vip-type.dto';
import { VipType } from '../entities/vip-type.entity';

@ApiTags('Master Data - VIP Types')
@ApiBearerAuth()
@Controller('master-data/vip-types')
export class VipTypeController {
  constructor(private readonly vipTypeService: VipTypeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new VIP type' })
  @ApiResponse({ status: 201, description: 'VIP type created successfully', type: VipType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateVipTypeDto): Promise<VipType> {
    return this.vipTypeService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all VIP types' })
  @ApiResponse({ status: 200, description: 'List of VIP types retrieved successfully', type: [VipType] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<VipType[]> {
    return this.vipTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get VIP type by ID' })
  @ApiResponse({ status: 200, description: 'VIP type found', type: VipType })
  @ApiResponse({ status: 404, description: 'VIP type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<VipType> {
    return this.vipTypeService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update VIP type by ID' })
  @ApiResponse({ status: 200, description: 'VIP type updated successfully', type: VipType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'VIP type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateVipTypeDto): Promise<VipType> {
    return this.vipTypeService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete VIP type by ID' })
  @ApiResponse({ status: 204, description: 'VIP type deleted successfully' })
  @ApiResponse({ status: 404, description: 'VIP type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.vipTypeService.remove(id);
  }
}
