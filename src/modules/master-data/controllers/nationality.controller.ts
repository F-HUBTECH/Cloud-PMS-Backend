import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { NationalityService } from '../services/nationality.service';
import { CreateNationalityDto, UpdateNationalityDto } from '../dto/nationality.dto';
import { Nationality } from '../entities/nationality.entity';

@ApiTags('Master Data - Nationalities')
@ApiBearerAuth()
@Controller('master-data/nationalities')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new nationality' })
  @ApiResponse({ status: 201, description: 'Nationality created successfully', type: Nationality })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateNationalityDto): Promise<Nationality> {
    return this.nationalityService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all nationalities' })
  @ApiResponse({ status: 200, description: 'List of nationalities retrieved successfully', type: [Nationality] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Nationality[]> {
    return this.nationalityService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get nationality by ID' })
  @ApiResponse({ status: 200, description: 'Nationality found', type: Nationality })
  @ApiResponse({ status: 404, description: 'Nationality not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Nationality> {
    return this.nationalityService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update nationality by ID' })
  @ApiResponse({ status: 200, description: 'Nationality updated successfully', type: Nationality })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Nationality not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateNationalityDto): Promise<Nationality> {
    return this.nationalityService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete nationality by ID' })
  @ApiResponse({ status: 204, description: 'Nationality deleted successfully' })
  @ApiResponse({ status: 404, description: 'Nationality not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.nationalityService.remove(id);
  }
}
