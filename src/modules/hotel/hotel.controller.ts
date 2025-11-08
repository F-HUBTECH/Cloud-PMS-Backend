import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';

@ApiTags('Hotels')
@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new hotel' })
  @ApiResponse({ status: 201, description: 'Hotel created successfully', type: Hotel })
  @ApiResponse({ status: 409, description: 'Hotel code already exists' })
  async create(@Body() createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelService.create(createHotelDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all hotels' })
  @ApiResponse({ status: 200, description: 'List of all hotels', type: [Hotel] })
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get hotel by ID' })
  @ApiParam({ name: 'id', description: 'Hotel ID (UUID)' })
  @ApiResponse({ status: 200, description: 'Hotel found', type: Hotel })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  async findOne(@Param('id') id: string): Promise<Hotel> {
    return this.hotelService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update hotel by ID' })
  @ApiParam({ name: 'id', description: 'Hotel ID (UUID)' })
  @ApiResponse({ status: 200, description: 'Hotel updated successfully', type: Hotel })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  async update(
    @Param('id') id: string,
    @Body() updateHotelDto: UpdateHotelDto,
  ): Promise<Hotel> {
    return this.hotelService.update(id, updateHotelDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete hotel by ID' })
  @ApiParam({ name: 'id', description: 'Hotel ID (UUID)' })
  @ApiResponse({ status: 204, description: 'Hotel deleted successfully' })
  @ApiResponse({ status: 404, description: 'Hotel not found' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.hotelService.remove(id);
  }
}
