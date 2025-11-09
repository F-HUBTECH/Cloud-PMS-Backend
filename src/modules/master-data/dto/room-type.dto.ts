import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateRoomTypeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ example: 'DLX', description: 'Room type code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  roomTypeCode?: string;

  @ApiProperty({ example: 'Deluxe Room', description: 'Room type name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  roomTypeName?: string;
}

export class UpdateRoomTypeDto extends PartialType(CreateRoomTypeDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
