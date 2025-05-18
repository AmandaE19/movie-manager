import React, { useEffect, useState } from "react";
import * as S from "./MovieDrawer.styled";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { createMovie, updateMovie } from "../../services/api";
import type { MovieDrawerProps } from "../../types/global";
import { formatDateToInput } from "../../utils/functions";

const MovieDrawer: React.FC<MovieDrawerProps> = ({ isOpen, onClose, movie }) => {
	const [form, setForm] = useState({
		title: "",
		originalTitle: "",
		tagline: "",
		description: "",
		posterUrl: "",
		releaseDate: "",
		duration: "",
		status: "",
		language: "",
		budget: "",
		revenue: "",
		popularity: "",
		voteCount: "",
		rating: "",
		genres: "",
		trailerUrl: "",
	});

	const [posterFile, setPosterFile] = useState<File | null>(null);
	const [posterPreview, setPosterPreview] = useState<string>("");

	useEffect(() => {
		if (isOpen && movie) {
			setForm({
				title: movie.title || "",
				originalTitle: movie.originalTitle || "",
				tagline: movie.tagline || "",
				description: movie.description || "",
				posterUrl: movie.posterUrl || "",
				releaseDate: movie.releaseDate ? formatDateToInput(new Date(movie.releaseDate)) : "",
				duration: movie.duration || "",
				status: movie.status || "",
				language: movie.language || "",
				budget: movie.budget || "",
				revenue: movie.revenue || "",
				popularity: movie.popularity || "",
				voteCount: movie.voteCount || "",
				rating: movie.rating || "",
				genres: movie.genres || "",
				trailerUrl: movie.trailerUrl || "",
			});
			setPosterFile(null);
		}
	}, [isOpen, movie]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setPosterFile(file);

			const previewUrl = URL.createObjectURL(file);
			setPosterPreview(previewUrl);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setForm(prev => ({
			...prev,
			[name]: name === "duration" || name === "budget" || name === "revenue" || name === "voteCount" || name === "rating" || name === "popularity"
				? Number(value)
				: value
		}));
	};

	const handleSubmit = async () => {
		try {
			if (posterFile) {
				const formData = new FormData();
				Object.entries(form).forEach(([key, value]) => {
					if (key !== "posterUrl") {
						formData.append(key, value === undefined || value === null ? "" : value.toString());
					}
				});
				formData.append("posterUrl", posterFile);

				if (movie && movie.id) {
					await updateMovie(movie.id, formData);
				} else {
					await createMovie(formData);
				}
			} else {
				if (movie && movie.id) {
					await updateMovie(movie.id, form);
				} else {
					await createMovie(form);
				}
			}
			onClose();
			window.location.reload();
		} catch (error) {
			alert("Erro ao salvar o filme.");
			console.error(error);
		}
		// const movieToSend = {
		// 	...form,
		// 	releaseDate: form.releaseDate || ""
		// };
		// if (movie) {
		// 	if (movie.id) {
		// 		const movieId = movie.id!;
		// 		await updateMovie(movieId, movieToSend);
		// 		onClose();
		// 		window.location.reload();

		// 	} else {
		// 		alert("Ops! Algo deu errado!")
		// 	}
		// } else {
		// 	await createMovie(movieToSend);
		// 	onClose();
		// 	window.location.reload();
		// }
	};

	return (
		<S.Container>
			<S.Overlay onClick={onClose} />
			<S.Drawer>
				<S.Header>
					<h2>{movie ? "Editar Filme" : "Adicionar Filme"}</h2>
					<button onClick={onClose}>×</button>
				</S.Header>
				<S.Form>
					<Input type="text" name="title" placeholder="Título" value={form.title} onChange={handleChange} />
					<Input type="text" name="originalTitle" placeholder="Título Original" value={form.originalTitle} onChange={handleChange} />
					<Input type="text" name="tagline" placeholder="Frase de impacto" value={form.tagline} onChange={handleChange} />
					<Input type="text" name="description" placeholder="Descrição" value={form.description} onChange={handleChange} />
					{/* <Input type="text" name="posterUrl" placeholder="URL do Poster" value={form.posterUrl} onChange={handleChange} /> */}
					{posterPreview && (
						<img
							src={posterPreview}
							alt="Poster Preview"
							style={{ width: "200px", height: "auto", marginBottom: "10px", borderRadius: "8px" }}
						/>
					)}

					<Input
						type="file"
						name="posterFile"
						accept="image/*"
						onChange={handleFileChange}
					/>
					<Input type="date" name="releaseDate" placeholder="Data de Lançamento" value={form.releaseDate} onChange={handleChange} required />
					<Input type="text" name="duration" placeholder="Duração (min)" value={form.duration} onChange={handleChange} />
					<Input type="text" name="status" placeholder="Status (ex: Lançado)" value={form.status} onChange={handleChange} />
					<Input type="text" name="language" placeholder="Idioma" value={form.language} onChange={handleChange} />
					<Input type="text" name="budget" placeholder="Orçamento (em dólares)" value={form.budget} onChange={handleChange} />
					<Input type="text" name="revenue" placeholder="Receita (em dólares)" value={form.revenue} onChange={handleChange} />
					<Input type="text" name="popularity" placeholder="Popularidade" value={form.popularity} onChange={handleChange} />
					<Input type="text" name="voteCount" placeholder="Número de votos" value={form.voteCount} onChange={handleChange} />
					<Input type="text" step="0.1" name="rating" placeholder="Nota" value={form.rating} onChange={handleChange} />
					<Input type="text" name="genres" placeholder="Gêneros (separados por vírgula)" value={form.genres} onChange={handleChange} />
					<Input type="text" name="trailerUrl" placeholder="URL do trailer" value={form.trailerUrl} onChange={handleChange} />
				</S.Form>
				<S.Footer>
					<Button
						onClick={onClose}
						variant="secondary"
					>Cancelar</Button>
					<Button onClick={handleSubmit} variant="primary">{movie ? "Editar Filme" : "Adicionar Filme"}</Button>
				</S.Footer>
			</S.Drawer>
		</S.Container>
	);
};

export default MovieDrawer;
