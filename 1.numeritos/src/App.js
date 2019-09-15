import React from 'react';
import './App.css';
const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component{
  constructor (props){
    super (props)
    this.state = {
      arr : numbers,
      value: '',
      filrternumber:'',
      pairs: false
    }
  }

  getUserNumber = (event) => {
    const userNumber = event.currentTarget.value;
    this.setState({
      filternumber: userNumber,
    })
  }

  render (){
    return (
    <div className="app">
      <input type="number" className="number" onChange={this.getUserNumber}/>
      <ul className="numbers--list">
        {this.state.arr
        .filter (item => {
          if (this.state.filternumber === ''){
            return true;
          } else {
            return this.state.filternumber <= item; 
          }
        })
        .filter (item => {
          if (this.state.pairs === false){
            return true;
          } else {
            return item%2 === 0;
          }
        })
        .map (number =>{
          return (
            <li key={number}>{number}</li>
          );
        })
        }
      </ul>
    </div>
    )
  }
}

export default App;
