import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateChannelDto {
  @ApiProperty({ example: 'OTA', description: 'Channel code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  channelCode?: string;

  @ApiProperty({ example: 'Online Travel Agency', description: 'Channel name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  channelName?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateChannelDto extends PartialType(CreateChannelDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
