import React, { useState } from "react";
import { useAPI } from "../../context/APIContext";
import { TSeminar } from "../../types/types";
import "./Form.sass";

const Form = ({
	seminar,
	closeModal,
}: {
	seminar: TSeminar;
	closeModal(): void;
}) => {
	const { updateSeminar } = useAPI();

	const [formData, setFormData] = useState<TSeminar>({
		id: seminar.id,
		title: seminar.title,
		description: seminar.description,
		date: seminar.date,
		time: seminar.time,
		photo: seminar.photo,
	});

	async function handleChange(
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = evt.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	async function handleSubmit(evt: React.FormEvent) {
		evt.preventDefault();

		try {
			await updateSeminar(formData.id, formData);
			closeModal();
		} catch (error) {
			alert(`Error: ${error}`);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="modal__content form">
			<h2 className="form__title">Редактировать семинар</h2>
			<div className="form__group">
				<label>Название:</label>
				<input
					className="form__input"
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form__group">
				<label>Описание:</label>
				<textarea
					className="form__textarea"
					name="description"
					value={formData.description}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form__group">
				<label>Дата:</label>
				<input
					className="form__input"
					type="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form__group">
				<label>Время:</label>
				<input
					className="form__input"
					type="time"
					name="time"
					value={formData.time}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form__group">
				<label>Фото (URL):</label>
				<input
					className="form__input"
					type="url"
					name="photo"
					value={formData.photo}
					onChange={handleChange}
					required
				/>
			</div>
			<button className="form__button modal__button button" type="submit">
				Сохранить изменения
			</button>
		</form>
	);
};

export default Form;
