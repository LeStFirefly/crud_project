import React from 'react';

function UpdateItem(props) {
  return (
    props.editMode ? 
    <button 
      className='btn btn-sm btn-success'
      onClick={() => props.updateItem(props.elementId)}
    >
      Save
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </svg>
    </button> 
    : 
    <button 
      className='btn btn-sm btn-warning'
      onClick={()=>props.toggleEdit()}
    >
      Edit
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    </button>
  ) 
}

  export default UpdateItem;