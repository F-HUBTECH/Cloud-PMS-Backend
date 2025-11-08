import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RoomViewService } from '../services/room-view.service';
import { CreateRoomViewDto, UpdateRoomViewDto } from '../dto/room-view.dto';
import { RoomView } from '../entities/room-view.entity';

@ApiTags('Master Data - Room Views')
@ApiBearerAuth()
@Controller('master-data/room-views')
export class RoomViewController {
  constructor(private readonly roomViewService: RoomViewService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new room view' })
  @ApiResponse({ status: 201, description: 'Room view created successfully', type: RoomView })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateRoomViewDto): Promise<RoomView> {
    return this.roomViewService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all room views' })
  @ApiResponse({ status: 200, description: 'List of room views retrieved successfully', type: [RoomView] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<RoomView[]> {
    return this.roomViewService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get room view by ID' })
  @ApiResponse({ status: 200, description: 'Room view found', type: RoomView })
  @ApiResponse({ status: 404, description: 'Room view not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<RoomView> {
    return this.roomViewService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update room view by ID' })
  @ApiResponse({ status: 200, description: 'Room view updated successfully', type: RoomView })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Room view not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateRoomViewDto): Promise<RoomView> {
    return this.roomViewService.update(id, updateDto);
  }
}
