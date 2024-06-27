export class ASTNodeDto {
  type: 'operation' | 'number' | 'variable';
  value: string;
  index?: number;
  left?: ASTNodeDto;
  right?: ASTNodeDto;
}
