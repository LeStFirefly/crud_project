import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button, Alert} from 'reactstrap';

import './PutNewItem.css';

export default class PutNewItem extends Component {
  
  createNewItem = async () =>  {
    let newUsername = document.getElementById('newUsername').value;
    let newAge = document.getElementById('newAge').value;
    
    if (!newUsername) {
      document.getElementById('emptyUsername').style.display = 'block';
    } else if (!newAge || newAge<0 || newAge>100) {
      document.getElementById('emptyUsername').style.display = 'none';
      document.getElementById('emptyAge').style.display = 'block';
    } else {
      document.getElementById('emptyUsername').style.display = 'none';
      document.getElementById('emptyAge').style.display = 'none';
      newUsername = newUsername[0].toUpperCase() + newUsername.slice(1);
      await this.putNewItem(newUsername, newAge);
      document.getElementById('newUsername').value = '';
      document.getElementById('newAge').value = '';
    }
  }

  putNewItem = async (name, age) => {
    const _api = 'http://178.128.196.163:3000/api/records';
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = {
      data: {
        name,
        age
      }
    };

    return await fetch(_api, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers
    })
      .then (response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then(error => {
                const e = new Error('Что-то пошло не так');
                e.data = error;
                throw e;
              })                
        }
      }) 
  }

  render() {
    return (
      <div className="putNewItem">
          <InputGroup>
              <Input placeholder='Username' id='newUsername'/>
              <Input type='number' placeholder='Age' id='newAge'/>
              <InputGroupAddon addonType="append" className='addButtonBlock'><Button onClick={() => this.createNewItem()} className='addButton'>Add new user</Button></InputGroupAddon> 
          </InputGroup>
          <Alert color="danger" className='alert' id='emptyUsername'>
            Username can't be empty!
          </Alert>
          <Alert color="danger" className='alert' id='emptyAge'>
            Age can't be empty and must be in range 0-100!
          </Alert>
      </div>
    );
  }
}