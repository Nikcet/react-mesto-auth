import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <a href="./index.html" className="header__logo-link">
        <img src={logo} alt="#" className="header__logo" />
      </a>
      {props.loggedIn ? <Link to="/sign-in" className="header__login-link">Выйти</Link> : <Link to="/sign-in" className="header__login-link">Войти</Link>}
    </header>
  );
}

export default Header;