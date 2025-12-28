import { useState, useRef, useEffect } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
      inputRef.current.focus();
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        ref={inputRef}
      />
      <button type="submit" disabled={!title.trim()}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;