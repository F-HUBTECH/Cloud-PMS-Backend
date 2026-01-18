import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTransCodeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'ROOM', description: 'Transaction code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  tranCode?: string;

  @ApiProperty({ example: 'Room Charge', description: 'Transaction description' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @ApiProperty({ example: 7.00, description: 'VAT percentage', required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  vatPercent?: number;

  @ApiProperty({ example: 10.00, description: 'Service percentage', required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  servicePercent?: number;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateTransCodeDto extends PartialType(CreateTransCodeDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
