import estilos from './Goal.module.css'

function Goal({icon, events, period, details, completed, goal }) {
    return ( 
        <div className={estilos.goal + " card"}>
            <div className="flex items-center">
                <div className={estilos.icon}>{icon}</div>
                <p className="text-xl ml-5 mr-10">{events}
                    <sub className="text-xs text-gray-500 ml-1">{period}</sub></p>
                <p>{details}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completed}/{goal}</p>
                    <div className={estilos.bar1}>
                        <div style={{width: `${Math.round((completed / goal) * 100)}%`}}
                        className={estilos.bar2}>
                        </div>
                    </div>
                </div>
                <button className='boton boton--gris'>Completed</button>
            </div>
        </div>
     );
}

export default Goal;