import { useAPI } from "../../context/APIContext";
import { Iprops } from "../App/App";
import Card from "../Card/Card";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CardList = ({ props }: { props: Iprops }) => {
	const { seminars } = useAPI();

	return (
		<div className="card-list">
			{seminars ? (
				seminars.map((seminar) => (
					<Card key={seminar.id} data={seminar} props={props} />
				))
			) : (
				<ErrorMessage />
			)}
		</div>
	);
};

export default CardList;
