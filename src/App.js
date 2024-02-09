import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    // https://jsonplaceholder.typicode.com/users

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }));
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input onChange={(e) => {
          const searchField = e.target.value.toLocaleLowerCase();
          this.setState(() => {
            return { searchField }
          });
        }} 
        className='search-box' 
        type='search' 
        placeholder='Search monsters'/>
        {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
          })
        }
      </div>
    );
  }
}

export default App;
