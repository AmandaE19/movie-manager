import { IsNotEmpty, IsOptional, IsDateString, IsInt, IsString, IsNumber } from "class-validator";

export class CreateMovieDto {
	@IsNotEmpty()
	@IsString()
	title: string;

	@IsOptional()
	@IsString()
	originalTitle?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsNumber()
	budget?: number;

	@IsNotEmpty()
	@IsDateString()
	releaseDate: string;

	@IsNotEmpty()
	@IsInt()
	duration: number;

	@IsNotEmpty()
	@IsString()
	genre: string;

	@IsNotEmpty()
	@IsString()
	rating: string;
}
