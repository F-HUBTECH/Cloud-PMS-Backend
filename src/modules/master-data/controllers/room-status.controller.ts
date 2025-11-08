import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RoomStatusService } from '../services/room-status.service';
import { CreateRoomStatusDto, UpdateRoomStatusDto } from '../dto/room-status.dto';
import { RoomStatus } from '../entities/room-status.entity';

@ApiTags('Master Data - Room Status')
@ApiBearerAuth()
@Controller('master-data/room-status')
export class RoomStatusController {
  constructor(private readonly roomStatusService: RoomStatusService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new room status' })
  @ApiResponse({ status: 201, description: 'Room status created successfully', type: RoomStatus })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateRoomStatusDto): Promise<RoomStatus> {
    return this.roomStatusService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all room statuses' })
  @ApiResponse({ status: 200, description: 'List of room statuses retrieved successfully', type: [RoomStatus] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<RoomStatus[]> {
    return this.roomStatusService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get room status by ID' })
  @ApiResponse({ status: 200, description: 'Room status found', type: RoomStatus })
  @ApiResponse({ status: 404, description: 'Room status not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<RoomStatus> {
    return this.roomStatusService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update room status by ID' })
  @ApiResponse({ status: 200, description: 'Room status updated successfully', type: RoomStatus })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Room status not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateRoomStatusDto): Promise<RoomStatus> {
    return this.roomStatusService.update(id, updateDto);
  }
}
