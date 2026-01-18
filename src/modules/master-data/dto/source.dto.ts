import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSourceDto {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
    @IsUUID()
    hotelId: string;

    @ApiProperty({ example: 'SRC01', description: 'Source Code' })
    @IsOptional()
    @IsString()
    @MaxLength(10)
    sourceCode?: string;

    @ApiProperty({ example: 'Online Travel Agency', description: 'Source Name' })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    sourceName?: string;

    @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

export class UpdateSourceDto extends PartialType(CreateSourceDto) {
    @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
