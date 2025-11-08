import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    if (createHotelDto.hotelCode) {
      const existing = await this.hotelRepository.findOne({
        where: { hotelCode: createHotelDto.hotelCode },
      });
      if (existing) {
        throw new ConflictException('Hotel code already exists');
      }
    }

    const hotel = this.hotelRepository.create(createHotelDto);
    return this.hotelRepository.save(hotel);
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  async findOne(id: string): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({ where: { id } });
    if (!hotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }
    return hotel;
  }

  async update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
    const hotel = await this.findOne(id);
    Object.assign(hotel, updateHotelDto);
    return this.hotelRepository.save(hotel);
  }

  async remove(id: string): Promise<void> {
    const hotel = await this.findOne(id);
    await this.hotelRepository.remove(hotel);
  }
}
