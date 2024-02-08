import goals from '../img/objetivo.png';
import profile from '../img/usuario.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" src={goals} alt="objetivo" />
                <a className="app" href="/">Goals App</a>
            </div>
            <nav className="nav-profile">
                <a  href="/profile">
                    <img className="profile-img" src={profile} alt="profile" />
                </a>
            </nav>
        </header>
    );
}

export default Header;