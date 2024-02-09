import goals from '../img/objetivo.png';
import profile from '../img/usuario.png';
import estilos from './Header.module.css';

function Header() {
    return (
        <header className={estilos.header}>
            <div className={estilos.logo}>
                <img className={estilos.logoImg} src={goals} alt="objetivo" />
                <a className={estilos.app} href="/">Goals App</a>
            </div>
            <nav className={estilos.navProfile}>
                <a  href="/profile">
                    <img className={estilos.profileImg} src={profile} alt="profile" />
                </a>
            </nav>
        </header>
    );
}

export default Header;