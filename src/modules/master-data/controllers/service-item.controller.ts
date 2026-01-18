import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ServiceItemService } from '../services/service-item.service';
import { CreateServiceItemDto, UpdateServiceItemDto } from '../dto/service-item.dto';
import { ServiceItem } from '../entities/service-item.entity';

@ApiTags('Master Data - Service Items')
@ApiBearerAuth()
@Controller('master-data/service-items')
export class ServiceItemController {
    constructor(private readonly serviceItemService: ServiceItemService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new service item' })
    @ApiResponse({ status: 201, description: 'Service item created successfully', type: ServiceItem })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async create(@Body() createDto: CreateServiceItemDto): Promise<ServiceItem> {
        return this.serviceItemService.create(createDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all service items' })
    @ApiResponse({ status: 200, description: 'List of service items retrieved successfully', type: [ServiceItem] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findAll(): Promise<ServiceItem[]> {
        return this.serviceItemService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get service item by ID' })
    @ApiResponse({ status: 200, description: 'Service item found', type: ServiceItem })
    @ApiResponse({ status: 404, description: 'Service item not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findOne(@Param('id') id: string): Promise<ServiceItem> {
        return this.serviceItemService.findOne(id);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update service item by ID' })
    @ApiResponse({ status: 200, description: 'Service item updated successfully', type: ServiceItem })
    @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    @ApiResponse({ status: 404, description: 'Service item not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async update(@Param('id') id: string, @Body() updateDto: UpdateServiceItemDto): Promise<ServiceItem> {
        return this.serviceItemService.update(id, updateDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete service item by ID' })
    @ApiResponse({ status: 204, description: 'Service item deleted successfully' })
    @ApiResponse({ status: 404, description: 'Service item not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async remove(@Param('id') id: string): Promise<void> {
        return this.serviceItemService.remove(id);
    }
}
