import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateGuestTypeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'IND', description: 'Guest type code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  guestTypeCode?: string;

  @ApiProperty({ example: 'Individual', description: 'Guest type name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  guestTypeName?: string;
}

export class UpdateGuestTypeDto extends PartialType(CreateGuestTypeDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
