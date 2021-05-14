import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button} from 'reactstrap';

import './PutNewItem.css';

export default class PutNewItem extends Component {
    render() {
      return (
        <div className="putNewItem">
            <InputGroup>
                <Input placeholder='Username'/>
                <Input placeholder='Age'/>
                <InputGroupAddon addonType="append" className='addButtonBlock'><Button className='addButton'>Add new user</Button></InputGroupAddon> 
            </InputGroup>
        </div>
      );
    }
}