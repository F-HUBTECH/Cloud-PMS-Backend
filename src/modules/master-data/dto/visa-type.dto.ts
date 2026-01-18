import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateVisaTypeDto {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
    @IsUUID()
    hotelId: string;

    @ApiProperty({ example: 'VISA01', description: 'Visa Code' })
    @IsOptional()
    @IsString()
    @MaxLength(10)
    visaCode?: string;

    @ApiProperty({ example: 'Tourist Visa', description: 'Visa Name' })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    visaName?: string;

    @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

export class UpdateVisaTypeDto extends PartialType(CreateVisaTypeDto) {
    @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
