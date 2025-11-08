import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TransCodeService } from '../services/trans-code.service';
import { CreateTransCodeDto, UpdateTransCodeDto } from '../dto/trans-code.dto';
import { TransCode } from '../entities/trans-code.entity';

@ApiTags('Master Data - Transaction Codes')
@ApiBearerAuth()
@Controller('master-data/trans-codes')
export class TransCodeController {
  constructor(private readonly transCodeService: TransCodeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new transaction code' })
  @ApiResponse({ status: 201, description: 'Transaction code created successfully', type: TransCode })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createDto: CreateTransCodeDto): Promise<TransCode> {
    return this.transCodeService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all transaction codes' })
  @ApiResponse({ status: 200, description: 'List of transaction codes retrieved successfully', type: [TransCode] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<TransCode[]> {
    return this.transCodeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get transaction code by ID' })
  @ApiResponse({ status: 200, description: 'Transaction code found', type: TransCode })
  @ApiResponse({ status: 404, description: 'Transaction code not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string): Promise<TransCode> {
    return this.transCodeService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update transaction code by ID' })
  @ApiResponse({ status: 200, description: 'Transaction code updated successfully', type: TransCode })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 404, description: 'Transaction code not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateTransCodeDto): Promise<TransCode> {
    return this.transCodeService.update(id, updateDto);
  }
}
