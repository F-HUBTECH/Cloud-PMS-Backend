import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TitleService } from '../services/title.service';
import { CreateTitleDto, UpdateTitleDto } from '../dto/title.dto';
import { Title } from '../entities/title.entity';

@ApiTags('Master Data - Titles')
@ApiBearerAuth()
@Controller('master-data/titles')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new title' })
  @ApiResponse({ status: 201, description: 'Title created successfully', type: Title })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateTitleDto): Promise<Title> {
    return this.titleService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all titles' })
  @ApiResponse({ status: 200, description: 'List of titles retrieved successfully', type: [Title] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Title[]> {
    return this.titleService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get title by ID' })
  @ApiResponse({ status: 200, description: 'Title found', type: Title })
  @ApiResponse({ status: 404, description: 'Title not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Title> {
    return this.titleService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update title by ID' })
  @ApiResponse({ status: 200, description: 'Title updated successfully', type: Title })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Title not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateTitleDto): Promise<Title> {
    return this.titleService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete title by ID' })
  @ApiResponse({ status: 204, description: 'Title deleted successfully' })
  @ApiResponse({ status: 404, description: 'Title not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.titleService.remove(id);
  }
}
