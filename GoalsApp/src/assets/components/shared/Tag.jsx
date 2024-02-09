import estilos from './Tag.module.css';

export default function Tag({ src ,texto, href, alt, classImg }) {
    return (
        <a className={estilos.navProfile} href={href}>
            <img className={classImg} src={src} alt={alt}/>
            <span>{texto}</span>
        </a>
    );
}