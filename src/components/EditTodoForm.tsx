import React, { useState } from "react";

interface EditTodoFormProps {
  editTodo: (value: string, id: string) => void;
  task: { task: string; id: string };
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  editTodo,
  task,
}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
