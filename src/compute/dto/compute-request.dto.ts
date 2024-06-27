import { ASTNodeDto } from './ast-node.dto';

export class ComputeRequestDto {
  numbers: number[];
  ast: ASTNodeDto;
}
