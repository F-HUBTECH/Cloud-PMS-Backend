import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateHotelDto {
  @ApiProperty({ example: 'HTL001', description: 'Hotel code', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(10)
  hotelCode?: string;

  @ApiProperty({ example: 'Grand Hotel', description: 'Hotel name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  hotelName: string;
}
