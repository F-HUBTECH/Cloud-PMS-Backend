import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'FO', description: 'Department code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  deptCode?: string;

  @ApiProperty({ example: 'Front Office', description: 'Department name' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  deptName?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
