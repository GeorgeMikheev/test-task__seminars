import { useAPI } from "../../context/APIContext";
import { Iprops } from "../App/App";
import Card from "../Card/Card";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './CardList.sass';

const CardList = ({ props }: { props: Iprops }) => {
	const { seminars } = useAPI();

	return (
		seminars ? (
		<div className="card-list">
			{seminars.map((seminar) => (
					<Card key={seminar.id} data={seminar} props={props} />
			))}
		</div>
	) : (
		<ErrorMessage />
	));
};

export default CardList;
