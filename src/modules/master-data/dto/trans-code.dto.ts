import { IsString, IsUUID, IsOptional, MaxLength, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTransCodeDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ example: 'ROOM', description: 'Transaction code' })
  @IsString()
  @MaxLength(10)
  transCode: string;

  @ApiProperty({ example: 'Room Charge', description: 'Transaction name' })
  @IsString()
  @MaxLength(255)
  transName: string;

  @ApiProperty({ example: 7.00, description: 'VAT percentage' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  vatPercent?: number;

  @ApiProperty({ example: 10.00, description: 'Service percentage' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  servicePercent?: number;

  @ApiProperty({ example: 'T', description: 'Transaction type' })
  @IsOptional()
  @IsString()
  @MaxLength(1)
  tranType?: string;

  @ApiProperty({ example: 'GRP01', description: 'Group ID' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  groupId?: string;

  @ApiProperty({ example: 'VAT1', description: 'VAT type' })
  @IsOptional()
  @IsString()
  @MaxLength(5)
  vatType?: string;

  @ApiProperty({ example: true, description: 'Is taxable' })
  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @ApiProperty({ example: true, description: 'Is rebate' })
  @IsOptional()
  @IsBoolean()
  isRebate?: boolean;

  @ApiProperty({ example: true, description: 'Is city ledger' })
  @IsOptional()
  @IsBoolean()
  isCityLedger?: boolean;

  @ApiProperty({ example: true, description: 'Is deposit' })
  @IsOptional()
  @IsBoolean()
  isDeposit?: boolean;

  @ApiProperty({ example: true, description: 'Allow manual post' })
  @IsOptional()
  @IsBoolean()
  allowManualPost?: boolean;

  @ApiProperty({ example: true, description: 'Require refer' })
  @IsOptional()
  @IsBoolean()
  requireRefer?: boolean;

  @ApiProperty({ example: true, description: 'Require remark' })
  @IsOptional()
  @IsBoolean()
  requireRemark?: boolean;

  @ApiProperty({ example: 'AR001', description: 'AR transfer code' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  arTransferCode?: string;

  @ApiProperty({ example: 'CASH', description: 'Payment type' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  payType?: string;

  @ApiProperty({ example: true, description: 'Active status', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateTransCodeDto extends PartialType(CreateTransCodeDto) {
  @ApiProperty({ example: true, description: 'Soft delete flag', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
