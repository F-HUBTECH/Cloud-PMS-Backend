import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTitleDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'MR', description: 'Title code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  titleCode?: string;

  @ApiProperty({ example: 'Mr.', description: 'Title name' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  titleName?: string;
}

export class UpdateTitleDto extends PartialType(CreateTitleDto) {
  @ApiProperty({ example: false, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isDelete?: boolean;
}
