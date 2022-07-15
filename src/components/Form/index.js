import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Form.css';

export default function Form({ changeInput, changeSubmit, newTask }){
  return (
    <form onSubmit={changeSubmit} className="form">
      <input
        type="text"
        onChange={changeInput}
        value={newTask}
      />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes={
  changeInput: PropTypes.func.isRequired,
  changeSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
