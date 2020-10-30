import React from 'react';
import CreateItem from './components/CreateItem';
import Items from './components/Items';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      data: {
        name: '',
        age: ''
      }
    };
  }

  componentDidMount() {
    this.getItems();
  }

  handleChange = (event) => {
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

  getItems = () => {
    this.setState({ loading: true }, () => {
        fetch('http://178.128.196.163:3000/api/records')
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  };

  createItem = () => {
    fetch('http://178.128.196.163:3000/api/records', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: this.state.data })
    }).then(() => {
      this.setState({
        data: {
          name: '',
          age: ''
        }
      });
      this.getItems()
     }
    );
  };

  render() {
    return (
      <div className='container'>
          <h1 className='display-3 mt-4'>CRUD UI for <b className='text-primary'>Noorsoft</b></h1>
          <CreateItem
            data={this.state.data}
            createItem={this.createItem}
            handleChange={this.handleChange}
          />
          <Items
            alldata={this.state.alldata}
            getItems={this.getItems}
          />
          <Loader loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
