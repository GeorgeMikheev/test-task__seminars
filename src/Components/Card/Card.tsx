import { TSeminar } from "../../types/types";
import { Iprops } from "../App/App";
import "./Card.sass";

const Card = ({ data, props }: { data: TSeminar; props: Iprops }) => {
	function reverseDate(date: any) {
		const parts = date.split("-");
		if (parts.length === 3) {
			return `${parts[2]}.${parts[1]}.${parts[0]}`;
		}
		return date;
	}

	return (
		<div className="card">
			<h3 className="card__title">{data.title}</h3>
			<img className="card__image" src={data.photo} alt={data.title} />
			<p className="card__description">{data.description}</p>
			<div className="card__date-time">
				<time className="card__date" dateTime={reverseDate(data.date)}>
					{reverseDate(data.date)}
				</time>
				<time className="card__date" dateTime={data.time}>
					{data.time}
				</time>
			</div>
			<div className="card__buttons">
				<button
					type="button"
					className="card__button edit-button"
					onClick={() => props.openEditModal(data)}>
					Редактировать
				</button>
				<button
					type="button"
					className="card__button delete-button"
					onClick={() => props.openDeleteModal(data)}>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default Card;
