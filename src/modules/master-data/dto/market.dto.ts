import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateMarketDto {
  @ApiProperty({ example: 'CORP', description: 'Market code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  marketCode?: string;

  @ApiProperty({ example: 'Corporate', description: 'Market name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  marketName?: string;
}

export class UpdateMarketDto extends PartialType(CreateMarketDto) {}
