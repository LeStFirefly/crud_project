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

    deleteItem = async (id) => {
        const _api = `http://178.128.196.163:3000/api/records/${id}`;
        await fetch(_api, {method: 'DELETE'})
            .then (response => {
                if (!response.ok) {
                    return response.json().then(error => {
                        const e = new Error('Что-то пошло не так');
                        e.data = error;
                        throw e;
                    }) 
                }
            })
    }

    updateItem = async (id) => {
        let staticElements = document.querySelectorAll("[data-state=static-"+id+"]");
        let updatingElements = document.querySelectorAll("[data-state=updating-"+id+"]");
        
        document.getElementById(`miniNameAlert-${id}`).style.display = 'none';
        document.getElementById(`miniAgeAlert-${id}`).style.display = 'none';

        staticElements.forEach( (elem) => elem.classList.toggle('hiddenItem'));
        updatingElements.forEach( (elem) => elem.classList.toggle('hiddenItem'));
    }

    saveItem = async (id) => {
        let username = document.getElementById(`username-${id}`).value;
        let age = document.getElementById(`age-${id}`).value;

        if (!username) {
            document.getElementById(`miniNameAlert-${id}`).style.display = 'block';
        } else if (!age || age<0 || age>100) {
            document.getElementById(`miniNameAlert-${id}`).style.display = 'none';
            document.getElementById(`miniAgeAlert-${id}`).style.display = 'block';
        } else {
            document.getElementById(`miniNameAlert-${id}`).style.display = 'none';
            document.getElementById(`miniAgeAlert-${id}`).style.display = 'none';
            username = username[0].toUpperCase() + username.slice(1);
            await this.postItem(id, username, age);
        }
    }

    postItem = async (id, name, age) => {
        const _api = `http://178.128.196.163:3000/api/records/${id}`;
        const headers = {
            'Content-Type': 'application/json'
        };
        const body = {
            data: {
            name,
            age
            }
        }
        
        return await fetch(_api, {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        })
            .then (response => {
                if (response.ok) {
                    this.updateItem(id);
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
        const {users} = this.state;
        let items = users.map ( (item, index) => {
            return(
                <TableBlockItem key={item._id} index={index+1} name={item.data.name} age={item.data.age} id={item._id} onDelete={this.deleteItem} onChange={this.updateItem} onSave={this.saveItem}/>
            )
        });

        return(          
            <Table>
                <thead>
                <tr>
                    <th className='column-1'></th>
                    <th className='column-2'>Name</th>
                    <th className='column-2'>Age</th>
                    <th className='column-3'>Edit</th>
                    <th className='column-4'>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                </tbody> 
            </Table>
        )
    }
}
