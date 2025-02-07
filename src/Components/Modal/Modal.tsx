import "./Modal.sass";

const Modal = ({
	children,
	closeModal,
}: {
	children: React.ReactNode;
	closeModal(): void;
}) => (
	<div className="modal-overlay">
		<div className="modal">
			{children}
			<button className="modal__close-button button" onClick={closeModal}>
				Закрыть
			</button>
		</div>
	</div>
);

export default Modal;
