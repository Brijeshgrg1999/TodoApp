import { useContext, useState } from 'react';
import '../styles/Popup.css';
import { TaskContext } from '../context/TaskContext';

function Popup() {
    //type of the state 
    type Task = {
        title: string;
    };

    const [task, setTask] = useState<Task>({
        title: ""
    });

    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        throw new Error("Popup must be used within a TaskProvider");
    }

    const { addTask } = taskContext;


    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log(event.target.value);
        setTask({
            title: event.target.value
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (task.title.trim()) {
            addTask(task);
            setTask({ title: "" });

        }
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">
                    <h3>
                    what's your goals today ? 
                    </h3>
                </label>

                <input style={{
                    height: "40px",
                    padding : ".5em" , 
                    borderRadius: "5px",
                    marginBottom: "10px"
                }} type="text" value={task.title} onChange={handleChange} placeholder='Workout at 5am .......' />

                <button style={{
                    height: "40px",
                    width:"100px" , 
                    borderRadius: "5px",
                    marginBottom: "10px",
                    border : "1px solid",
                    backgroundColor : "white"
                    
                }} type='submit'>
                    Create Task 
                </button>

            </form>
        </div>
    );
}


export default Popup;