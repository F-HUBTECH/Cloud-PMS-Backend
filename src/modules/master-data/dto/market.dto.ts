import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateMarketDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'CORP', description: 'Market code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  marketCode?: string;

  @ApiProperty({ example: 'Corporate', description: 'Market name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  marketName?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateMarketDto extends PartialType(CreateMarketDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
