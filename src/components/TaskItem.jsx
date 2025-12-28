const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span className={task.completed ? 'completed' : ''}>
          {task.title}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;