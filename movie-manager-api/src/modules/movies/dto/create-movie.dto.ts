import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString,
} from "class-validator";

export class CreateMovieDto {
	@IsNotEmpty()
	@IsString()
	title: string;

	@IsOptional()
	@IsString()
	originalTitle?: string;

	@IsOptional()
	@IsString()
	tagline?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsString()
	posterUrl?: string;

	@IsOptional()
	@IsDateString()
	releaseDate: string;

	@IsOptional()
	@IsString()
	duration: number;

	@IsOptional()
	@IsString()
	status?: string;

	@IsOptional()
	@IsString()
	language?: string;

	@IsOptional()
	@IsString()
	budget?: number;

	@IsOptional()
	@IsString()
	revenue?: number;

	@IsOptional()
	@IsString()
	popularity?: number;

	@IsOptional()
	@IsString()
	voteCount?: number;

	@IsOptional()
	@IsString()
	rating?: number;

	@IsOptional()
	@IsString()
	genres?: string[];

	@IsOptional()
	@IsString()
	trailerUrl?: string;
}