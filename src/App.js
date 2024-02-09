import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '21t43g3e'
        },
        {
          name: 'Frank',
          id: '31t43g3e'
        },
        {
          name: 'Jacky',
          id: '41t43g3e'
        },
        {
          name: 'Andrei',
          id: '51t43g3e'
        }

      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
          })
        }
      </div>
    );
  }
}

export default App;
