import { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component'
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(resp =>
      resp.json()).then(user => this.setState({ monsters: user }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList monsters={this.state.monsters}>

          </CardList>

        </header>
      </div>
    );
  };
}

export default App;
