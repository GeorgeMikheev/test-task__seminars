import "./Header.sass";

// Этот компонент сгенирировал при помощи AI, просто что бы страничка выглядела более полноценно
const Header = () => (
	<header className="header">
		<div className="header__logo">
			<h1>CareHarmony</h1>
			<p>Ваш путь к гармонии и заботе о себе</p>
		</div>
		<nav className="header__nav">
			<ul>
				<li>
					<a href="#seminars">Семинары</a>
				</li>
				<li>
					<a href="#about">О нас</a>
				</li>
				<li>
					<a href="#contact">Контакты</a>
				</li>
			</ul>
		</nav>
		<button className="header__auth-button">Войти</button>
	</header>
);

export default Header;
