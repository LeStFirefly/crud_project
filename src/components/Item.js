import React from 'react'
import UpdateItem from './UpdateItem'
import DeleteItem from './DeleteItem'

class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editMode: false,
        data: {
          name: props.data.data.name,
          age: props.data.data.age
        }
      };
    }

    inputRef = React.createRef()
    
    toggleEdit = () => {
        this.setState({
          editMode: !this.state.editMode
        }, () => {
            this.inputRef.current.focus();
        })
      }
    
    updateItem = (id) => {
        fetch('http://178.128.196.163:3000/api/records/' + id, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: this.state.data })
      })
        .then(res => res.json())
        .then(() => {
            this.toggleEdit();
            this.props.getItems();
      });
    }

      handleInputChange = (event) => {
        var name = this.state.data.name;
        var age = this.state.data.age;
        (event.target.name === 'name') ? name = event.target.value : age = event.target.value;
        this.setState({
          data: {
            name: name,
            age: age
          }
        });
      };
    
    getItem = (id) => {
        fetch('http://178.128.196.163:3000/api/records/' + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              data: {
                name: result.data.name,
                age: result.data.age
              }
           });
          });
      };
      
    render(){

    const {
        editMode,
        data
    } = this.state;

    return (
            <tr key={this.props.data._id}>
                <td className='text-center'><b>{this.props.index}</b></td>
                <td>
                  <input 
                    ref={this.inputRef}
                    className='form-control' 
                    type='text'
                    name='name'
                    value={data.name}
                    onChange={this.handleInputChange}
                    disabled = {!editMode}
                  /> 
                </td>
                <td>
                  <input 
                    className='form-control' 
                    type='text' 
                    name='age'
                    value={data.age} 
                    onChange={this.handleInputChange}
                    disabled = {!editMode}
                  />
                </td>
                <td>
                  <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <UpdateItem
                    toggleEdit={this.toggleEdit}
                    elementId={this.props.data._id}
                    editMode={this.state.editMode}
                    updateItem={this.updateItem}
                    />
                    <DeleteItem
                    elementId={this.props.data._id}
                    data={this.state.data}
                    getItems={this.props.getItems}
                    />
                  </div>
                </td>
            </tr>
            )
    }
}

export default Item