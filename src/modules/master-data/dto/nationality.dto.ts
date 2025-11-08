import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateNationalityDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'TH', description: 'Nationality code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  nationCode?: string;

  @ApiProperty({ example: 'Thai', description: 'Nationality name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nationName?: string;
}

export class UpdateNationalityDto extends PartialType(CreateNationalityDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
