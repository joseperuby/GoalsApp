import goals from '../img/objetivo.png'

function Header() {
    return (
        <div>
            <div>
                <img src={goals} alt="objetivo" />
                <a href="/">Goals App</a>
            </div>
            <nav className="flex">
                <a href="/profila">Perfil</a>
            </nav>
        </div>
    )
}

export default Header;