import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSettleTypeDto {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
    @IsUUID()
    hotelId: string;

    @ApiProperty({ example: 'CASH', description: 'Settle Code' })
    @IsOptional()
    @IsString()
    @MaxLength(10)
    settleCode?: string;

    @ApiProperty({ example: 'Cash Payment', description: 'Settle Name' })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    settleName?: string;

    @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

export class UpdateSettleTypeDto extends PartialType(CreateSettleTypeDto) {
    @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
