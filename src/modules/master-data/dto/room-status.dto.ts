import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateRoomStatusDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'VC', description: 'Status code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  statusCode?: string;

  @ApiProperty({ example: 'Vacant Clean', description: 'Status name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  statusName?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateRoomStatusDto extends PartialType(CreateRoomStatusDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
