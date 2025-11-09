import { IsString, IsUUID, IsOptional, IsNumber, IsDateString, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateRateDetailDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Rate ID' })
  @IsOptional()
  @IsUUID()
  rateId?: string;

  @ApiProperty({ example: '2024-01-01', description: 'Effective date' })
  @IsOptional()
  @IsDateString()
  effectiveDate?: string;

  @ApiProperty({ example: 2500.00, description: 'Price' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  price?: number;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateRateDetailDto extends PartialType(CreateRateDetailDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
