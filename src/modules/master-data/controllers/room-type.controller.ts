import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RoomTypeService } from '../services/room-type.service';
import { CreateRoomTypeDto, UpdateRoomTypeDto } from '../dto/room-type.dto';
import { RoomType } from '../entities/room-type.entity';

@ApiTags('Master Data - Room Types')
@ApiBearerAuth()
@Controller('master-data/room-types')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new room type' })
  @ApiResponse({ status: 201, description: 'Room type created successfully', type: RoomType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateRoomTypeDto): Promise<RoomType> {
    return this.roomTypeService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all room types' })
  @ApiResponse({ status: 200, description: 'List of room types retrieved successfully', type: [RoomType] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<RoomType[]> {
    return this.roomTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get room type by ID' })
  @ApiResponse({ status: 200, description: 'Room type found', type: RoomType })
  @ApiResponse({ status: 404, description: 'Room type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<RoomType> {
    return this.roomTypeService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update room type by ID' })
  @ApiResponse({ status: 200, description: 'Room type updated successfully', type: RoomType })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Room type not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateRoomTypeDto): Promise<RoomType> {
    return this.roomTypeService.update(id, updateDto);
  }
}
