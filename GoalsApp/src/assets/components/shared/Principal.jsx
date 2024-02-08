import './Principal.css';
import Tag from './Tag';
import list from '../img/portapapeles.png';
import add from '../img/boton-mas.png';

function Principal({ children }) {
    return (
        <div className="principal">
            <aside className="aside">
                <Tag classImg="list-img" href="/lista" texto="Lista" src={list}/>
                <Tag classImg="add-img" href="/crear" texto="Agregar meta" src={add}/>
            </aside>
            <main className="main">
                {children}
            </main>
        </div>
    );
}

export default Principal;