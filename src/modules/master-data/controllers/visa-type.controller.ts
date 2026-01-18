import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VisaTypeService } from '../services/visa-type.service';
import { CreateVisaTypeDto, UpdateVisaTypeDto } from '../dto/visa-type.dto';
import { VisaType } from '../entities/visa-type.entity';

@ApiTags('Master Data - Visa Types')
@ApiBearerAuth()
@Controller('master-data/visa-types')
export class VisaTypeController {
    constructor(private readonly visaTypeService: VisaTypeService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new visa type' })
    @ApiResponse({ status: 201, description: 'Visa type created successfully', type: VisaType })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async create(@Body() createDto: CreateVisaTypeDto): Promise<VisaType> {
        return this.visaTypeService.create(createDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all visa types' })
    @ApiResponse({ status: 200, description: 'List of visa types retrieved successfully', type: [VisaType] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findAll(): Promise<VisaType[]> {
        return this.visaTypeService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get visa type by ID' })
    @ApiResponse({ status: 200, description: 'Visa type found', type: VisaType })
    @ApiResponse({ status: 404, description: 'Visa type not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findOne(@Param('id') id: string): Promise<VisaType> {
        return this.visaTypeService.findOne(id);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update visa type by ID' })
    @ApiResponse({ status: 200, description: 'Visa type updated successfully', type: VisaType })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 404, description: 'Visa type not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async update(@Param('id') id: string, @Body() updateDto: UpdateVisaTypeDto): Promise<VisaType> {
        return this.visaTypeService.update(id, updateDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete visa type by ID' })
    @ApiResponse({ status: 204, description: 'Visa type deleted successfully' })
    @ApiResponse({ status: 404, description: 'Visa type not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async remove(@Param('id') id: string): Promise<void> {
        return this.visaTypeService.remove(id);
    }
}
