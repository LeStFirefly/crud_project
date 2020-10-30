import React from 'react';

function DeleteItem(props) {
    const modalIdentifier = 'delete'+props.elementId
    const dataTarget = '#'+modalIdentifier

    const deleteItem = (id) => {
      fetch('http://178.128.196.163:3000/api/records/' + id, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((result) => {
          props.getItems();
        });
    };

    return (
      <React.Fragment>
        
    <button 
      type='button' 
      className='btn btn-sm btn-danger' 
      data-toggle='modal' 
      data-target={dataTarget}
      >
        Delete
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
      </button>
      <div 
        className='modal fade' 
        id={modalIdentifier} 
        role='dialog' 
        aria-labelledby='ModalLabel' 
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='ModalLabel'>Please confirm</h5>
              <button type='button' className='close' data-dismiss='modal'>
                <span>&times;</span>
              </button>
            </div>
                <div className='modal-body'>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text text-dark'>Name</span>
                    </div>
                    <input 
                      type='text'
                      className='form-control'
                      name='name'
                      value={props.data.name}
                      disabled={true}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text text-dark '>Age</span>
                    </div>
                    <input 
                      type='text'
                      className='form-control'
                      name='age'
                      value={props.data.age}
                      disabled={true}
                    />
                  </div>
                </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button 
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
                onClick={() => deleteItem(props.elementId)}
                >
                  Delete
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>

        </React.Fragment>
    )
    
  }

  export default DeleteItem;