import './App.css';
import React, {Component} from 'react';
// import Header from './component/Header';
import MainApp from './component/MainApp';
import data from './data/db.json'

class App extends Component {
  constructor(props){
    super(props);

    this.state = data
}
  

  render(){
    return (
    <div className="App">
      <MainApp data={this.state} />
    </div>
  );
  }
}

export default App;
