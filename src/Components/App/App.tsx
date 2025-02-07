import { useState } from "react";
import CardList from "../CardList/CardList";
import { TSeminar } from "../../types/types";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { useAPI } from "../../context/APIContext";

export interface Iprops {
	openEditModal(seminar: TSeminar): void;
	openDeleteModal(seminar: TSeminar): void;
}

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedSeminar, setSelectedSeminar] = useState<TSeminar | null>(null);
	const [modalType, setModalType] = useState<"EDIT" | "DELETE" | null>(null);

	const { deleteSeminar } = useAPI();

	function openEditModal(seminar: TSeminar) {
		setSelectedSeminar(seminar);
		setModalType("EDIT");
		setIsModalOpen(true);
	}

	function openDeleteModal(seminar: TSeminar) {
		setSelectedSeminar(seminar);
		setModalType("DELETE");
		setIsModalOpen(true);
	}

	function closeModal() {
		setSelectedSeminar(null);
		setModalType(null);
		setIsModalOpen(false);
	}

    function deleteCard() {
        deleteSeminar(selectedSeminar ? selectedSeminar.id : null);
        closeModal();
    }

	const props: Iprops = {
		openEditModal,
		openDeleteModal,
	};

	return (
		<>
			<CardList props={props} />
			{isModalOpen && (
				<Modal closeModal={closeModal}>
					{modalType === "EDIT" && selectedSeminar ? (
						<Form seminar={selectedSeminar} closeModal={closeModal} />
					) : (
						<div className="modal__content-delete">
							<p>Вы действительно хотите удалить семинар?</p>
							<button
								className="modal__button button"
								onClick={deleteCard}>
								Удалить
							</button>
						</div>
					)}
				</Modal>
			)}
		</>
	);
};

export default App;
