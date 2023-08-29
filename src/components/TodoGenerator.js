import React, { useState } from 'react';
import '../style.css'

const TodoGenerator = ({ onAddList }) => {
  const [listName, setListName] = useState('');

  const handleAddList = () => {
    if (listName.trim() !== '') {
      onAddList(listName);
      setListName('');
    }
  };

  return (
    <div className='list-box'>
      <div>
      <input className='list-box-todo' type="text" value={listName} onChange={(event) => setListName(event.target.value)} placeholder="Add Todo . . ." />
      <button className= 'blue-button' onClick={handleAddList}>Add</button>
      </div>
    </div>
  );
};

export default TodoGenerator;