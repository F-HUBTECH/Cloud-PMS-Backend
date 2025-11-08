import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateBedTypeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'KING', description: 'Bed type code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  bedCode?: string;

  @ApiProperty({ example: 'King Size Bed', description: 'Bed type name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  bedName?: string;
}

export class UpdateBedTypeDto extends PartialType(CreateBedTypeDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
