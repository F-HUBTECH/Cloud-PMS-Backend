import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'NewPassword123!', description: 'New password', required: false })
  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;
}
