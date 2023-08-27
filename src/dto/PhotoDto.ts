import { IsNotEmpty, IsUrl, MinLength, MaxLength } from 'class-validator';

export class PhotoDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  label: string;
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
