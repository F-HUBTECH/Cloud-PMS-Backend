import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'TH', description: 'Country code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  countryCode?: string;

  @ApiProperty({ example: 'Thailand', description: 'Country name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  countryName?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
