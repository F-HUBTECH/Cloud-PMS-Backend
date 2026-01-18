import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { BedType } from './entities/bed-type.entity';
import { RoomStatus } from './entities/room-status.entity';
import { RoomView } from './entities/room-view.entity';
import { AbfType } from './entities/abf-type.entity';
import { Channel } from './entities/channel.entity';
import { Market } from './entities/market.entity';
import { Company } from './entities/company.entity';
import { Country } from './entities/country.entity';
import { Department } from './entities/department.entity';
import { GuestType } from './entities/guest-type.entity';
import { Nationality } from './entities/nationality.entity';
import { Title } from './entities/title.entity';
import { VipType } from './entities/vip-type.entity';
import { Building } from './entities/building.entity';
import { Floor } from './entities/floor.entity';
import { RoomType } from './entities/room-type.entity';
import { RateMaster } from './entities/rate-master.entity';
import { RateDetail } from './entities/rate-detail.entity';
import { TransCode } from './entities/trans-code.entity';
import { VisaType } from './entities/visa-type.entity';
import { Source } from './entities/source.entity';
import { SettleType } from './entities/settle-type.entity';
import { ServiceItem } from './entities/service-item.entity';

// Services
import { BedTypeService } from './services/bed-type.service';
import { RoomStatusService } from './services/room-status.service';
import { RoomViewService } from './services/room-view.service';
import { AbfTypeService } from './services/abf-type.service';
import { ChannelService } from './services/channel.service';
import { MarketService } from './services/market.service';
import { CompanyService } from './services/company.service';
import { CountryService } from './services/country.service';
import { DepartmentService } from './services/department.service';
import { GuestTypeService } from './services/guest-type.service';
import { NationalityService } from './services/nationality.service';
import { TitleService } from './services/title.service';
import { VipTypeService } from './services/vip-type.service';
import { BuildingService } from './services/building.service';
import { FloorService } from './services/floor.service';
import { RoomTypeService } from './services/room-type.service';
import { RateMasterService } from './services/rate-master.service';
import { RateDetailService } from './services/rate-detail.service';
import { TransCodeService } from './services/trans-code.service';
import { VisaTypeService } from './services/visa-type.service';
import { SourceService } from './services/source.service';
import { SettleTypeService } from './services/settle-type.service';
import { ServiceItemService } from './services/service-item.service';

// Controllers
import { BedTypeController } from './controllers/bed-type.controller';
import { RoomStatusController } from './controllers/room-status.controller';
import { RoomViewController } from './controllers/room-view.controller';
import { AbfTypeController } from './controllers/abf-type.controller';
import { ChannelController } from './controllers/channel.controller';
import { MarketController } from './controllers/market.controller';
import { CompanyController } from './controllers/company.controller';
import { CountryController } from './controllers/country.controller';
import { DepartmentController } from './controllers/department.controller';
import { GuestTypeController } from './controllers/guest-type.controller';
import { NationalityController } from './controllers/nationality.controller';
import { TitleController } from './controllers/title.controller';
import { VipTypeController } from './controllers/vip-type.controller';
import { BuildingController } from './controllers/building.controller';
import { FloorController } from './controllers/floor.controller';
import { RoomTypeController } from './controllers/room-type.controller';
import { RateMasterController } from './controllers/rate-master.controller';
import { RateDetailController } from './controllers/rate-detail.controller';
import { TransCodeController } from './controllers/trans-code.controller';
import { VisaTypeController } from './controllers/visa-type.controller';
import { SourceController } from './controllers/source.controller';
import { SettleTypeController } from './controllers/settle-type.controller';
import { ServiceItemController } from './controllers/service-item.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BedType,
      RoomStatus,
      RoomView,
      AbfType,
      Channel,
      Market,
      Company,
      Country,
      Department,
      GuestType,
      Nationality,
      Title,
      VipType,
      Building,
      Floor,
      RoomType,
      RateMaster,
      RateDetail,
      TransCode,
      VisaType,
      Source,
      SettleType,
      ServiceItem,
    ]),
  ],
  controllers: [
    BedTypeController,
    RoomStatusController,
    RoomViewController,
    AbfTypeController,
    ChannelController,
    MarketController,
    CompanyController,
    CountryController,
    DepartmentController,
    GuestTypeController,
    NationalityController,
    TitleController,
    VipTypeController,
    BuildingController,
    FloorController,
    RoomTypeController,
    RateMasterController,
    RateDetailController,
    TransCodeController,
    VisaTypeController,
    SourceController,
    SettleTypeController,
    ServiceItemController,
  ],
  providers: [
    BedTypeService,
    RoomStatusService,
    RoomViewService,
    AbfTypeService,
    ChannelService,
    MarketService,
    CompanyService,
    CountryService,
    DepartmentService,
    GuestTypeService,
    NationalityService,
    TitleService,
    VipTypeService,
    BuildingService,
    FloorService,
    RoomTypeService,
    RateMasterService,
    RateDetailService,
    TransCodeService,
    VisaTypeService,
    SourceService,
    SettleTypeService,
    ServiceItemService,
  ],
  exports: [
    BedTypeService,
    RoomStatusService,
    RoomViewService,
    AbfTypeService,
    ChannelService,
    MarketService,
    CompanyService,
    CountryService,
    DepartmentService,
    GuestTypeService,
    NationalityService,
    TitleService,
    VipTypeService,
    BuildingService,
    FloorService,
    RoomTypeService,
    RateMasterService,
    RateDetailService,
    TransCodeService,
    VisaTypeService,
    SourceService,
    SettleTypeService,
    ServiceItemService,
  ],
})
export class MasterDataModule { }
