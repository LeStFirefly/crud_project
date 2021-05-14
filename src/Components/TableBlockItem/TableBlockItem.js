import React, { Component } from 'react';

import './TableBlockItem.css'

export default class TableBlock extends Component {
    render() {
        const {index, name, age} =this.props;

        return(
            <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td><i className="bi bi-pencil-fill"></i></td>
                <td><i className="bi bi-trash-fill"></i></td>
            </tr>
        )
    }
}