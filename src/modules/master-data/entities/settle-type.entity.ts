import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('mst_settle_type', { schema: 'mdm' })
export class SettleType {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    @Column({ name: 'hotel_id', type: 'uuid' })
    hotelId: string;

    @ApiProperty({ example: 'CASH' })
    @Column({ name: 'settle_code', length: 10, nullable: true })
    settleCode: string;

    @ApiProperty({ example: 'Cash Payment' })
    @Column({ name: 'settle_name', length: 100, nullable: true })
    settleName: string;

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
