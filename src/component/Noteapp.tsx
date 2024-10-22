
import { useContext } from 'react';
import '../styles/Noteapp.css';
import Cards from './Cards';
import Popup from './CreatePopup';
import { TaskContext } from '../context/TaskContext';
import TaskIllustration from '../assets/TaskIllustration';


function Noteapp() {
    const taskContext = useContext(TaskContext) ;
    let flag : boolean = false ; 
     if(!taskContext) throw Error ; 
     const { tasks } = taskContext ; 
    
     if(tasks.length === 0 ) {
        flag = true ; 
     }
     
    return (
        <div className="noteappContainer">
            <div className='header'>
                <h2>Todo</h2>
            </div>
            <Popup />
            <Cards />
                <div style={{
                    width:"50" , 
                    margin : "0 auto"
                }}>
                 
                {flag? <TaskIllustration/> : ""}
                </div>
        </div>
    );
}

export default Noteapp;