import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'COMP001', description: 'Company code' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  companyCode?: string;

  @ApiProperty({ example: 'ABC Corporation', description: 'Company name' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  companyName?: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Market ID' })
  @IsOptional()
  @IsUUID()
  marketId?: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
