import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { Hotel } from './entities/hotel.entity';
import { RoomType } from './entities/room-type.entity';
import { Room } from './entities/room.entity';
import { RoomStatus } from './entities/room-status.entity';
import { RoomView } from './entities/room-view.entity';
import { BedType } from './entities/bed-type.entity';
import { Building } from './entities/building.entity';
import { Floor } from './entities/floor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Hotel,
      RoomType,
      Room,
      RoomStatus,
      RoomView,
      BedType,
      Building,
      Floor,
    ]),
  ],
  controllers: [HotelController],
  providers: [HotelService],
  exports: [HotelService],
})
export class HotelModule {}
