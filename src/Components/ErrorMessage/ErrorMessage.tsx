import "./ErrorMessage.sass";

const ErrorMessage = () => (
	<div className="error">
		<h2 className="error__title">Error</h2>
		<p className="error__text">
			Похоже при загрузке данных возникла ошибка. Попробуйте обновить страницу.
		</p>
	</div>
);

export default ErrorMessage;
