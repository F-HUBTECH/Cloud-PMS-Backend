import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateVipTypeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'VIP', description: 'VIP code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  vipCode?: string;

  @ApiProperty({ example: 'VIP Guest', description: 'VIP name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  vipName?: string;
}

export class UpdateVipTypeDto extends PartialType(CreateVipTypeDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
