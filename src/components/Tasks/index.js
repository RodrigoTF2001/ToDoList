import React from 'react';
import PropTypes from 'prop-types';
import './Tasks.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({ tasks, editTask, deleteTask }){
  return (
    <ul className="Tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          <input type="checkbox" />
          {task}
          <span>
            <FaEdit className="edit" onClick={(e) => editTask(e, index)} />
            <FaWindowClose className="delete" onClick={(e) => deleteTask(e, index)} />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes={
  tasks: PropTypes.array.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
