import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SettleTypeService } from '../services/settle-type.service';
import { CreateSettleTypeDto, UpdateSettleTypeDto } from '../dto/settle-type.dto';
import { SettleType } from '../entities/settle-type.entity';

@ApiTags('Master Data - Settle Types')
@ApiBearerAuth()
@Controller('master-data/settle-types')
export class SettleTypeController {
    constructor(private readonly settleTypeService: SettleTypeService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new settle type' })
    @ApiResponse({ status: 201, description: 'Settle type created successfully', type: SettleType })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async create(@Body() createDto: CreateSettleTypeDto): Promise<SettleType> {
        return this.settleTypeService.create(createDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all settle types' })
    @ApiResponse({ status: 200, description: 'List of settle types retrieved successfully', type: [SettleType] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findAll(): Promise<SettleType[]> {
        return this.settleTypeService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get settle type by ID' })
    @ApiResponse({ status: 200, description: 'Settle type found', type: SettleType })
    @ApiResponse({ status: 404, description: 'Settle type not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findOne(@Param('id') id: string): Promise<SettleType> {
        return this.settleTypeService.findOne(id);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update settle type by ID' })
    @ApiResponse({ status: 200, description: 'Settle type updated successfully', type: SettleType })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 404, description: 'Settle type not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async update(@Param('id') id: string, @Body() updateDto: UpdateSettleTypeDto): Promise<SettleType> {
        return this.settleTypeService.update(id, updateDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete settle type by ID' })
    @ApiResponse({ status: 204, description: 'Settle type deleted successfully' })
    @ApiResponse({ status: 404, description: 'Settle type not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async remove(@Param('id') id: string): Promise<void> {
        return this.settleTypeService.remove(id);
    }
}
