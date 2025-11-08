import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHotelDto } from './create-hotel.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateHotelDto extends PartialType(CreateHotelDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
