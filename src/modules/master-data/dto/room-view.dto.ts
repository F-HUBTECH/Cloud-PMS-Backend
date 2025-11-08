import { IsString, IsUUID, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateRoomViewDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'SV', description: 'View code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  viewCode?: string;

  @ApiProperty({ example: 'Sea View', description: 'View name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  viewName?: string;
}

export class UpdateRoomViewDto extends PartialType(CreateRoomViewDto) {}
