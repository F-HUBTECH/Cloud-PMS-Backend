import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { GuestTypeService } from '../services/guest-type.service';
import { CreateGuestTypeDto, UpdateGuestTypeDto } from '../dto/guest-type.dto';
import { GuestType } from '../entities/guest-type.entity';

@ApiTags('Master Data - Guest Types')
@ApiBearerAuth()
@Controller('master-data/guest-types')
export class GuestTypeController {
  constructor(private readonly guestTypeService: GuestTypeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new guest type' })
  @ApiResponse({ status: 201, description: 'Guest type created successfully', type: GuestType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateGuestTypeDto): Promise<GuestType> {
    return this.guestTypeService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all guest types' })
  @ApiResponse({ status: 200, description: 'List of guest types retrieved successfully', type: [GuestType] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<GuestType[]> {
    return this.guestTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get guest type by ID' })
  @ApiResponse({ status: 200, description: 'Guest type found', type: GuestType })
  @ApiResponse({ status: 404, description: 'Guest type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<GuestType> {
    return this.guestTypeService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update guest type by ID' })
  @ApiResponse({ status: 200, description: 'Guest type updated successfully', type: GuestType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Guest type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateGuestTypeDto): Promise<GuestType> {
    return this.guestTypeService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete guest type by ID' })
  @ApiResponse({ status: 204, description: 'Guest type deleted successfully' })
  @ApiResponse({ status: 404, description: 'Guest type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.guestTypeService.remove(id);
  }
}
