import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_visa_type', { schema: 'mdm' })
export class VisaType {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    @Column({ name: 'hotel_id', type: 'uuid' })
    hotelId: string;

    @ApiProperty({ example: 'VISA01' })
    @Column({ name: 'visa_code', length: 10, nullable: true })
    visaCode: string;

    @ApiProperty({ example: 'Tourist Visa' })
    @Column({ name: 'visa_name', length: 100, nullable: true })
    visaName: string;

    @ApiProperty()
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ApiProperty({
        description: 'สถานะการใช้งาน (true = ใช้งาน, false = ปิดการใช้งาน)',
        example: true,
    })
    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive: boolean;
}
