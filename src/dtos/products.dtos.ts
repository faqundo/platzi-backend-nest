import { IsString, IsNumber , IsUrl} from "class-validator";

export class CreateProductDto {
  @IsString()
  readonly name: string;

  readonly description: string;

  @IsNumber()
  readonly price: number;

  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto {
  @IsString()
  readonly name?: string;

  readonly description?: string;

  @IsNumber()
  readonly price?: number;

  @IsNumber()
  readonly stock?: number;

  @IsUrl()
  readonly image?: string;
}