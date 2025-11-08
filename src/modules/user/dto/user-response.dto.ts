import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponseDto {
  @ApiProperty({ example: 'uuid-string', description: 'User ID' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'john_doe', description: 'Username' })
  @Expose()
  username: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email address' })
  @Expose()
  email: string;

  @ApiProperty({ example: true, description: 'Is user active' })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z', description: 'Created at' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z', description: 'Updated at' })
  @Expose()
  updatedAt: Date;
}
