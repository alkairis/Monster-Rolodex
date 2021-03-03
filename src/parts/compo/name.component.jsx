import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      name: 'Deepak Singh Rajput',
      roll: '0704CS181047'
    }
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>{this.state.name}</p>
          <p>{this.state.roll}</p>
          {4+5}
          <button onDoubleClick={()=> this.setState({name:'Jhalli', roll:'0714CS181064'})}>Change name</button>
      </header>
    </div>
    );    
  };
}


export default App;
