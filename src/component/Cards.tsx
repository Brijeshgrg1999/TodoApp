import { useContext } from 'react';
import '../styles/Cards.css';
import { TaskContext } from '../context/TaskContext';
import {DeleteIcons , EditIcons } from './Icons';

function Cards() {
    const taskContext = useContext(TaskContext) ; 
    if(!taskContext) throw Error ; 
    const { tasks , deleteTask } = taskContext ; 

    return (
        <div className="cardContainer">
            {tasks && tasks.map((task)=>{
                return (
                    <div className='taskContainer'>
                        {task.title} 
                        <button onClick={()=>deleteTask(task)}>
                            <DeleteIcons/>
                        </button>

                        
                    </div>
                )
            })}
        </div>
    );
}

export default Cards;