import React, { Component } from 'react';

export default class TableBlock extends Component {
    componentDidMount() {
        this.getInfo()
            .then(res => console.log(res));
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
        return(
            <div className='tableBlock'>
                table component
            </div>
        )
    }
}