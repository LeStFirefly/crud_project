import React, { Component } from 'react';

import './TableBlockItem.css'

export default class TableBlock extends Component {
    render() {
        const {index, name, age, onDelete, onUpdate, id} =this.props;

        return(
            <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td><i className="bi bi-pencil-fill icons" onClick={() => onUpdate(id)}></i></td>
                <td><i className="bi bi-trash-fill icons" onClick={() => onDelete(id)}></i></td>
            </tr>
        )
    }
}