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
	duration: string;

	@IsOptional()
	@IsString()
	status?: string;

	@IsOptional()
	@IsString()
	language?: string;

	@IsOptional()
	@IsString()
	budget?: string;

	@IsOptional()
	@IsString()
	revenue?: string;

	@IsOptional()
	@IsString()
	popularity?: string;

	@IsOptional()
	@IsString()
	voteCount?: string;

	@IsOptional()
	@IsString()
	rating?: string;

	@IsOptional()
	@IsString()
	genres?: string;

	@IsOptional()
	@IsString()
	trailerUrl?: string;
}