import { Module } from '@nestjs/common';
import { ComputeController } from './compute.controller';
import { ComputeService } from './compute.service';

@Module({
  controllers: [ComputeController],
  providers: [ComputeService]
})
export class ComputeModule {}
