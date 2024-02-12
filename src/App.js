import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  return (
    <div className='App'>
      <h1 className='app-title'>Robots</h1>
      {/* <SearchBox 
        className = 'robot-search-box'
        onChangeHandler = {onSearchChange}
        placeholder = 'Search robots'
      />
      <CardList robots = {filteredrobots}/> */}
    </div>
  )
}



  // class App extends Component {
  //   constructor() {
  //     super()

  //     // https://jsonplaceholder.typicode.com/users

  //     this.state = {
  //       robots: [],
  //       searchField: '',
  //     };
  //   }

  //   componentDidMount() {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(res => res.json())
  //       .then(users => this.setState(() => {
  //         return {robots: users}
  //       }));
  //   }

  //   onSearchChange = (e) => {
  //     const searchField = e.target.value.toLocaleLowerCase();
  //     this.setState(() => {
  //       return { searchField }
  //     });
  //   }

  //   render() {

  //     const { robots, searchField } = this.state;
  //     const { onSearchChange } = this;

  //     const filteredrobots = robots.filter((robot) => {
  //       return robot.name.toLocaleLowerCase().includes(searchField);
  //     });

  //     return (
  //       <div className='App'>
  //         <h1 className='app-title'>Robots</h1>
  //         <SearchBox 
  //           className = 'robot-search-box'
  //           onChangeHandler = {onSearchChange}
  //           placeholder = 'Search robots'
  //           />
  //         <CardList robots = {filteredrobots}/>
  //       </div>
  //     );
  //   }
  // }

export default App;
