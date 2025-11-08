import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from '../user/dto/user-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    // Check if user already exists
    const existingUser = await this.userService.findByUsername(
      registerDto.username,
    );
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const existingEmail = await this.userService.findByEmail(registerDto.email);
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    // Create new user
    const user = await this.userService.create(registerDto);

    // Generate JWT token
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user,
    };
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    // Find user by username or email
    let user = await this.userService.findByUsername(loginDto.username);
    if (!user) {
      user = await this.userService.findByEmail(loginDto.username);
    }

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Validate password
    const isPasswordValid = await user.validatePassword(loginDto.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('User account is inactive');
    }

    // Generate JWT token
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: plainToInstance(UserResponseDto, user),
    };
  }

  async validateUser(userId: string): Promise<UserResponseDto> {
    return this.userService.findOne(userId);
  }
}
