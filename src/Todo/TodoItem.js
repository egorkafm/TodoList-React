import React from "react";
import PropTypes from 'prop-types'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem',
  }
}


function TodoItem({ todo, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input style={styles.input} type="checkbox"/>
        <strong>{index + 1}</strong>
        {todo.title}      
      </span>
      <button className='rm'>&times;</button>

    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default TodoItem