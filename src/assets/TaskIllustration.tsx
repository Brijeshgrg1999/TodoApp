import taskImage from '../assets/task.png';

function TaskIllustration() {
    return (
        <div>
            <p style={{
                fontSize: "15px",
                color: "gray"
            }}
            > Start adding with new task for the day</p>
            <img src={taskImage} width={250} height={200} />
        </div>
    );
}

export default TaskIllustration;