import { IsString, IsUUID, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAbfTypeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'ABF', description: 'ABF code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  abfCode?: string;

  @ApiProperty({ example: 'American Breakfast', description: 'ABF name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  abfName?: string;
}

export class UpdateAbfTypeDto extends PartialType(CreateAbfTypeDto) {}
