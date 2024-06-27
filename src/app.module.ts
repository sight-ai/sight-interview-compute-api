import { Module } from '@nestjs/common';
import { ComputeModule } from './compute/compute.module';

@Module({
  imports: [ComputeModule],
})
export class AppModule {}
