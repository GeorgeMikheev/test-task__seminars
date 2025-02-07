import React, { useState } from "react";
import { useAPI } from "../../context/APIContext";
import { TSeminar } from "../../types/types";

const Form = ({ seminar }: { seminar: TSeminar }) => {
	const { updateSeminar } = useAPI();

	const [formData, setFormData] = useState<TSeminar>({
		id: seminar.id,
		title: seminar.title,
		description: seminar.description,
		date: seminar.date,
		time: seminar.time,
		photo: seminar.photo,
	});

	async function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
		} catch (error) {
			alert(`Error: ${error}`);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<div>
				<label>Название:</label>
				<input
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Описание:</label>
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Дата:</label>
				<input
					type="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Время:</label>
				<input
					type="time"
					name="time"
					value={formData.time}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Фото (URL):</label>
				<input
					type="url"
					name="photo"
					value={formData.photo}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit">Сохранить изменения</button>
		</form>
	);
};

export default Form;
