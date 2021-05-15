import React, { Component } from 'react';
import {Input} from 'reactstrap';

import './TableBlockItem.css'

export default class TableBlockItem extends Component {
    render() {
        const {index, name, age, onDelete, onChange, onSave, id} =this.props;

        return(
            <tr className='itemRow'>
                <th scope="row">{index}</th>
                <td>
                    <span data-state={`static-${id}`}>{name}</span>
                    <Input data-state={`updating-${id}`} placeholder={name} className='hiddenItem' id={`username-${id}`}/>
                    <p className='miniAlert' id={`miniNameAlert-${id}`}>Invalid data!</p>
                </td>
                <td>
                    <span data-state={`static-${id}`}>{age}</span>
                    <Input data-state={`updating-${id}`} type='number' placeholder={age} className='hiddenItem' id={`age-${id}`}/>
                    <p className='miniAlert' id={`miniAgeAlert-${id}`}>Invalid data!</p>
                </td>
                <td className='justifyIcons'>
                    <i data-state={`static-${id}`} className="bi bi-pencil-fill icons" onClick={() => onChange(id)}></i>
                    <i data-state={`updating-${id}`} className="bi bi-save-fill icons hiddenItem" onClick={() => onSave(id)}></i>
                    <i data-state={`updating-${id}`} className="bi bi-x-circle icons hiddenItem cancelButton" onClick={() => onChange(id)}></i>
                </td>               
                <td><i className="bi bi-trash-fill icons" onClick={() => onDelete(id)}></i></td>
            </tr>
        )
    }
}