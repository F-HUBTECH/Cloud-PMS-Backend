import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateFloorDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Building ID' })
  @IsOptional()
  @IsUUID()
  buildingId?: string;

  @ApiProperty({ example: '1st Floor', description: 'Floor name' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  floorName?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateFloorDto extends PartialType(CreateFloorDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
