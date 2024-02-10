import { useState } from 'react';
import estilos from './Details.module.css'
import { useEffect } from 'react';

function Details() {

    const [form, setForm] = useState({
        details: '',
        events: 1,
        period: 'week',
        icon: '🏃',
        goal: 52,
        deadline: '2025-01-01',
        completed: 0
    });

    const {details, events, period, icon, goal, deadline, completed} = form;

    const onChange = (event, prop) => {
        setForm(state => ({ ...state, [prop]: event.target.value}));
    }

    useEffect(() => {
    }, [form]);

    const create = async () => {
        console.log(form);
    }

    const optionsFreq = ["day", "week", "month", "year"];
    const optionsIcon = ["🏃","🏊","🌎", "💪","📖","🥕","💧","🕺"];
    return ( 
        <div className="card">
            <form action="" className="p-4">
                <label className="label">
                    Describe your goal
                    <input 
                    className="input" 
                    type="text" placeholder="i.e. Go to Disneyland" 
                    value={details}
                    onChange={e => onChange(e, 'details')}/>
                </label>
                <label className="label">
                    How often will it to take to achieve your goal? <span>(i.e. 1 time per week)</span>
                    <div className="flex mb-6">
                        <input 
                        className="input mr-6" type="number" 
                        value={events}
                        onChange={e => onChange(e, 'events')}/>
                        <select className="input"
                         value={period}
                         onChange={e => onChange(e, 'period')}>
                            {optionsFreq.map(opt => <option value={opt}>{opt}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many goals do you want to achieve?
                    <input className="input" 
                    type="number" 
                    value={goal}
                    onChange={e => onChange(e, 'goal')}/>
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input className="input" 
                    type="date" 
                    value={deadline}
                    onChange={e => onChange(e, 'deadline')}/>
                </label>
                <label className="label">
                    How many times have you achieve this goal?
                    <input 
                    className="input" 
                    type="number"
                    value={completed}
                    onChange={e => onChange(e, 'completed')}/>
                </label>
                <label className="label">
                    Choose the icon for your goal
                    <select 
                    className="input" 
                    value={icon}
                    onChange={e => onChange(e, 'icon')}>
                        {optionsIcon.map(opt => <option value={opt}>{opt}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button 
                className="boton boton--negro"
                onClick={create}
                >  
                Create
                </button>
                <button className="boton boton--gris">Cancel</button>
            </div>
        </div>
     );
}

export default Details;