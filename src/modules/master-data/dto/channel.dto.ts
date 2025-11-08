import { IsString, IsOptional, MaxLength } from 'class-validator';
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
}

export class UpdateChannelDto extends PartialType(CreateChannelDto) {}
