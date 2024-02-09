import Goal from "./goal";

const listMock = [
{
    "id": "1",
    "details": "Run 30 minutes",
    "period": "day",
    "events": 1,
    "icon": "🏃🏽‍♂️",
    "goal": 365,
    "dueDate": "2030-01-01",
    "completed": 5
},
{
    "id": "1",
    "details": "Run 30 minutes",
    "period": "day",
    "events": 1,
    "icon": "🏃🏽‍♂️",
    "goal": 365,
    "dueDate": "2030-01-01",
    "completed": 5
},
];

function List() {
    return (    
        listMock.map(goal => <Goal {...goal}></Goal>)
     );
}

export default List;