import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SourceService } from '../services/source.service';
import { CreateSourceDto, UpdateSourceDto } from '../dto/source.dto';
import { Source } from '../entities/source.entity';

@ApiTags('Master Data - Sources')
@ApiBearerAuth()
@Controller('master-data/sources')
export class SourceController {
    constructor(private readonly sourceService: SourceService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new source' })
    @ApiResponse({ status: 201, description: 'Source created successfully', type: Source })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async create(@Body() createDto: CreateSourceDto): Promise<Source> {
        return this.sourceService.create(createDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all sources' })
    @ApiResponse({ status: 200, description: 'List of sources retrieved successfully', type: [Source] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findAll(): Promise<Source[]> {
        return this.sourceService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get source by ID' })
    @ApiResponse({ status: 200, description: 'Source found', type: Source })
    @ApiResponse({ status: 404, description: 'Source not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findOne(@Param('id') id: string): Promise<Source> {
        return this.sourceService.findOne(id);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update source by ID' })
    @ApiResponse({ status: 200, description: 'Source updated successfully', type: Source })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 404, description: 'Source not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async update(@Param('id') id: string, @Body() updateDto: UpdateSourceDto): Promise<Source> {
        return this.sourceService.update(id, updateDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete source by ID' })
    @ApiResponse({ status: 204, description: 'Source deleted successfully' })
    @ApiResponse({ status: 404, description: 'Source not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async remove(@Param('id') id: string): Promise<void> {
        return this.sourceService.remove(id);
    }
}
