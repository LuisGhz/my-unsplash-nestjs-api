import { IsNotEmpty, IsUrl, MinLength } from 'class-validator';

export class PhotoDto {
  @IsNotEmpty()
  @MinLength(5)
  label: string;
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
