import React from 'react';

function CreateItem(props) {
  return (
    <React.Fragment>
      <button
        type='button'
        className='btn btn-lg btn-primary float-right my-4'
        data-toggle='modal'
        data-target='#myModal'
      >
        Create New
        <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-person-plus-fill ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </button>
      <div
        className='modal fade'
        id='myModal'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-name' id='exampleModalLabel'>New Item</h5>
              <button 
                type='button' 
                className='close' 
                data-dismiss='modal'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
                  <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Enter name here'
                    id='name'
                    name='name'
                    value={props.data.name}
                    onChange={props.handleChange}
                  />
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Enter age here'
                    id='age'
                    name='age'
                    value={props.data.age}
                    onChange={props.handleChange}
                  />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-success'
                data-dismiss='modal'
                onClick={props.createItem}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateItem;
