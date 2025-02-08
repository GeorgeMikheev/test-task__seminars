const ModalContentDelete = ({ deleteCard }: { deleteCard(): void }) => (
	<div className="modal__content">
		<p className="modal__text">Вы действительно хотите удалить семинар?</p>
		<button className="modal__button button" onClick={deleteCard}>
			Удалить
		</button>
	</div>
);

export default ModalContentDelete;
