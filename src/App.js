import React, { Component } from 'react';
import logo from './logo.svg';
import Words from './Words';
import Numbers from './Numbers';
import './match.css';

class App extends Component {
  constructor(props){
    super(props);
    this.number = React.createRef();
    this.word = React.createRef();
  }
  state = {
    selectWord:0,
    selectNumber:0,
    wordSelected:false,
    numberSelected:false,
    congratmsg:false,
    matched:0,
    goal:4,
  }

  compareValue = () => {
    if(this.state.selectNumber === this.state.selectWord){
      console.log("Matched");
      //add new className to the child 
      this.number.current.changeMatchedState();
      this.word.current.changeMatchedState();

      //calculate the final result
      this.setState({
        matched:this.state.matched+1,
      },()=>{
        if(this.state.matched == this.state.goal){
          console.log("Congrats!");
          this.setState({
            congratmsg:true,
          },()=>{
            return true;
          })

        }
      })

    }
    else{
      //clear selected state
      this.word.current.clearSelectedKey();
      this.number.current.clearSelectedKey();
      console.log("error");
    }

    this.setState({
      wordSelected:false,
      numberSelected:false,
    })

  }

  handleSelectWord = (value) => {
    this.setState({
      selectWord:value,
      wordSelected:true
    },()=>{
      if(this.state.numberSelected){
        this.compareValue();
      }
    })
    console.log("word is",value);
    
  }

  handleSelectNumber = (value) => {
    this.setState({
      selectNumber:value,
      numberSelected:true
    },()=>{
      if(this.state.wordSelected){
        this.compareValue();
      }
    })
    console.log("number is",value);
  }

  render() {
    if(this.state.congratmsg){
      return <div>Congrations! You select all pairs.</div>
    }
    return (
      <div className="App">
        <div className="match-quiz">
          <h1>Match the words to the numbers</h1>
          <h3>Click the word and then the number. Match all the pairs to continue.</h3>
        <Words ref={this.word} onHandle = {(value)=>this.handleSelectWord(value)}></Words>
        <Numbers ref={this.number}  onHandle = {(value)=>this.handleSelectNumber(value)}></Numbers>
        </div>  
      </div>
    );
  }
}

export default App;
