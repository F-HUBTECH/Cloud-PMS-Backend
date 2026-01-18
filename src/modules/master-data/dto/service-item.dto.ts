import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateServiceItemDto {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
    @IsUUID()
    hotelId: string;

    @ApiProperty({ example: 'SVC001', description: 'Service Code' })
    @IsOptional()
    @IsString()
    @MaxLength(10)
    serviceCode?: string;

    @ApiProperty({ example: 'Extra Bed', description: 'Service Name' })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    serviceName?: string;

    @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

export class UpdateServiceItemDto extends PartialType(CreateServiceItemDto) {
    @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
