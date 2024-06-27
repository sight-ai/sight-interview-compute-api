import { Injectable } from '@nestjs/common';
import { ComputeRequestDto } from './dto/compute-request.dto';
import { ASTNodeDto } from './dto/ast-node.dto';
import { ComputeResponseDto } from './dto/compute-response.dto';

@Injectable()
export class ComputeService {
  compute(request: ComputeRequestDto): ComputeResponseDto {
    const { numbers, ast } = request;
    const result = this.evaluateAST(ast, numbers);
    return { result };
  }

  private evaluateAST(node: ASTNodeDto, numbers: number[]): number {
    switch (node.type) {
      case 'number':
        return typeof node.value === 'number' ? node.value : parseFloat(node.value);
      case 'variable':
        return numbers[node.index];
      case 'operation':
        const leftValue = this.evaluateAST(node.left, numbers);
        const rightValue = this.evaluateAST(node.right, numbers);
        return this.performOperation(node.value, leftValue, rightValue);
      default:
        throw new Error('Invalid AST node type');
    }
  }

  private performOperation(operation: string, left: number, right: number): number {
    switch (operation) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        if (right === 0) {
          throw new Error('Division by zero is not allowed');
        }
        return left / right;
      default:
        throw new Error('Invalid operation');
    }
  }
}
