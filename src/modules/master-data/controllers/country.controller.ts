import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CountryService } from '../services/country.service';
import { CreateCountryDto, UpdateCountryDto } from '../dto/country.dto';
import { Country } from '../entities/country.entity';

@ApiTags('Master Data - Countries')
@ApiBearerAuth()
@Controller('master-data/countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new country' })
  @ApiResponse({ status: 201, description: 'Country created successfully', type: Country })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateCountryDto): Promise<Country> {
    return this.countryService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({ status: 200, description: 'List of countries retrieved successfully', type: [Country] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get country by ID' })
  @ApiResponse({ status: 200, description: 'Country found', type: Country })
  @ApiResponse({ status: 404, description: 'Country not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<Country> {
    return this.countryService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update country by ID' })
  @ApiResponse({ status: 200, description: 'Country updated successfully', type: Country })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Country not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateCountryDto): Promise<Country> {
    return this.countryService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete country by ID' })
  @ApiResponse({ status: 204, description: 'Country deleted successfully' })
  @ApiResponse({ status: 404, description: 'Country not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.countryService.remove(id);
  }
}
