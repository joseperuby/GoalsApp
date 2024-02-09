import estilos  from'./Principal.module.css';
import estilosTag from './Tag.module.css';
import Tag from './Tag';
import list from '../img/portapapeles.png';
import add from '../img/boton-mas.png';

function Principal({ children }) {
    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>
                <Tag classImg={estilosTag.listImg} href="/lista" texto="Lista" src={list} alt=''/>
                <Tag classImg={estilosTag.addImg} href="/crear" texto="Agregar meta" src={add} alt=''/>
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>
    );
}

export default Principal;