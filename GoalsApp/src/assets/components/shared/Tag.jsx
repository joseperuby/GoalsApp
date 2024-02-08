import './Tag.css';

export default function Tag({ src ,texto, href, alt, classImg }) {
    return (
        <a className='nav-profile' href={href}>
            <img className={classImg} src={src} alt={alt}/>
            <span>{texto}</span>
        </a>
    );
}