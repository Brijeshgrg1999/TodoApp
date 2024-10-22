import { createContext, useState , ReactNode} from "react";


type Task = { 
    title : string ; 
}

type TaskContextType = { 
    tasks : Task[]  ; 
    addTask :(task : Task ) => void ; 
    deleteTask : (task : Task) => void ; 
}

// creating context with a default value 

export const TaskContext = 
createContext< TaskContextType | undefined >(undefined) ; 

//function to extract the data from the localStorage ; 
const loadData = ():Task[] =>{
    const savedTasks = localStorage.getItem('tasks') ; 
    return savedTasks ? JSON.parse(savedTasks) : [] ; 
}

//creating provider component 

export const TaskProvider : React.FC<{children:ReactNode}> = ({children})=>{


    const [tasks , setTasks] = useState<Task[]>(loadData) ; 

// Function to add a new task
const addTask = (task: Task) => {
    setTasks((prevTasks) => {
        // Create a new array that includes the previous tasks and the new task
        const updatedTasks = [...prevTasks, task];
        // Save the updated tasks array to localStorage as a JSON string
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        // Return the updated tasks array to update state
        return updatedTasks;
    });
};

const deleteTask =( t :Task) =>{
    setTasks((prevData)=>{
        //filter the data that matches with the task 
        const updatedTasks = prevData.filter( task => task.title !== t.title) ; 
        localStorage.setItem('tasks' , JSON.stringify(updatedTasks)) ; 
        return updatedTasks ;
    })
} 



    return ( 
        <TaskContext.Provider value ={{tasks , addTask , deleteTask  }}> 
            {children}
        </TaskContext.Provider>
    )
} 

