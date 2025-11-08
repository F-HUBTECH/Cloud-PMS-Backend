import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateRateMasterDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'RACK', description: 'Rate code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  rateCode?: string;

  @ApiProperty({ example: 'Rack Rate', description: 'Rate name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  rateName?: string;
}

export class UpdateRateMasterDto extends PartialType(CreateRateMasterDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isDelete?: boolean;
}
