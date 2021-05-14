import React, { Component } from 'react';
import TableBlockItem from '../TableBlockItem';
import { Table } from 'reactstrap';

import './TableBlock.css'
export default class TableBlock extends Component {
    state = {
        users: [],
    }
    
    componentDidMount() {
        this.getInfo()
            .then(res => this.setState({users: res}));
    }

    componentDidUpdate(prevState) {
        if (this.state.users !== prevState.users) {
            this.getInfo()
                .then(res => this.setState({users: res}));
        }
    }

    getInfo = async () => {
        const _api = 'http://178.128.196.163:3000/api/records';

        const res = await fetch(_api);

        if (!res.ok) {
            throw new Error(`Could not fetch ${_api}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    render() {
        const {users} = this.state;
        let items = users.map ( (item, index) => {
            return(
                <TableBlockItem key={item._id} index={index+1} name={item.data.name} age={item.data.age} id={item._id}/>
            )
        });

        return(          
            <Table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                </tbody> 
            </Table>
        )
    }
}
