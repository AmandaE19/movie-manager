import React, { useEffect, useState } from "react";
import * as S from "./AddMovieDrawer.styled";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { createMovie } from "../../services/api";
import type { AddMovieDrawerProps } from "../../types/global";

const AddMovieDrawer: React.FC<AddMovieDrawerProps> = ({ isOpen, onClose }) => {
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
	})

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
		const movieToSend = {
			...form,
		};
		await createMovie(movieToSend);
		onClose();
	};

	return (
		<S.Container>
			<S.Overlay onClick={onClose} />
			<S.Drawer>
				<S.Header>
					<h2>Adicionar Filme</h2>
					<button onClick={onClose}>×</button>
				</S.Header>
				<S.Form>
                    <Input type="text" name="title" placeholder="Título" value={form.title} onChange={handleChange} />
					<Input type="text" name="originalTitle" placeholder="Título Original" value={form.originalTitle} onChange={handleChange} />
					<Input type="text" name="tagline" placeholder="Frase de impacto" value={form.tagline} onChange={handleChange} />
					<Input type="text" name="description" placeholder="Descrição" value={form.description} onChange={handleChange} />
					<Input type="text" name="posterUrl" placeholder="URL do Poster" value={form.posterUrl} onChange={handleChange} />
                    <Input type="date" name="releaseDate" placeholder="Data de Lançamento" value={form.releaseDate} onChange={handleChange} />
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
                    <Button onClick={onClose} variant="secondary">Cancelar</Button>
                    <Button onClick={handleSubmit} variant="primary">Adicionar Filme</Button>
				</S.Footer>
			</S.Drawer>
		</S.Container>
	);
};

export default AddMovieDrawer;
