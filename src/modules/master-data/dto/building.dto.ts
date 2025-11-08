import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateBuildingDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiProperty({ example: 'Building A', description: 'Building name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  buildingName?: string;
}

export class UpdateBuildingDto extends PartialType(CreateBuildingDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isDelete?: boolean;
}
