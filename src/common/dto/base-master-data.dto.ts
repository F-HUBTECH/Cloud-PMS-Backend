import { IsUUID, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BaseMasterDataDto {
  @ApiPropertyOptional({ description: 'Hotel ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}
