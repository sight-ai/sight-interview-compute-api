import { Body, Controller, Post, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { ComputeService } from './compute.service';
import { ComputeRequestDto } from './dto/compute-request.dto';
import { ComputeResponseDto, ErrorResponseDto } from './dto/compute-response.dto';

@Controller('compute')
export class ComputeController {
  constructor(private readonly computeService: ComputeService) {}

  @Post()
  async compute(@Body() computeRequestDto: ComputeRequestDto): Promise<ComputeResponseDto | ErrorResponseDto> {
    try {
      return this.computeService.compute(computeRequestDto);
    } catch (error) {
      if (error.message === 'Division by zero is not allowed') {
        throw new UnprocessableEntityException({ error: error.message });
      } else {
        throw new BadRequestException({ error: error.message });
      }
    }
  }
}
