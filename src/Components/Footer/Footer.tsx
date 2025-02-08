import "./Footer.sass";

const Footer = () => (
	<footer className="footer">
		<div className="footer__logo">
			<h2>CareHarmony</h2>
			<p>Ваш путь к гармонии и заботе о себе</p>
		</div>
		<div className="footer__social">
			<a href="https://orenburg.hh.ru/resume/a529ed8aff0dd61dc30039ed1f534165736133" target="_blank" rel="noopener noreferrer">
				Резюме
			</a>
			<a href="https://github.com/GeorgeMikheev" target="_blank" rel="noopener noreferrer">
				GitHub
			</a>
			<a href="https://t.me/George_Mikheev" target="_blank" rel="noopener noreferrer">
				Telegram
			</a>
		</div>
		<div className="footer__contact">
            <p>Задание сделал: Михеев Георгий</p>
			<p>Email: GeorgeMikheev56@yandex.ru</p>
		</div>
	</footer>
);

export default Footer;
