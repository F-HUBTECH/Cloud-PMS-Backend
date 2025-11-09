import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ChannelService } from '../services/channel.service';
import { CreateChannelDto, UpdateChannelDto } from '../dto/channel.dto';
import { Channel } from '../entities/channel.entity';

@ApiTags('Master Data - Channels')
@ApiBearerAuth()
@Controller('master-data/channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new channel' })
  @ApiResponse({ status: 201, description: 'Channel created successfully', type: Channel })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateChannelDto): Promise<Channel> {
    return this.channelService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all channels' })
  @ApiResponse({ status: 200, description: 'List of channels retrieved successfully', type: [Channel] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Channel[]> {
    return this.channelService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get channel by ID' })
  @ApiResponse({ status: 200, description: 'Channel found', type: Channel })
  @ApiResponse({ status: 404, description: 'Channel not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Channel> {
    return this.channelService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update channel by ID' })
  @ApiResponse({ status: 200, description: 'Channel updated successfully', type: Channel })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Channel not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateChannelDto): Promise<Channel> {
    return this.channelService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete channel by ID' })
  @ApiResponse({ status: 204, description: 'Channel deleted successfully' })
  @ApiResponse({ status: 404, description: 'Channel not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.channelService.remove(id);
  }
}
