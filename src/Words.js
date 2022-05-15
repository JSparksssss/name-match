import React, { Component } from 'react';
import logo from './logo.svg';
import './match.css';

export default class Words extends Component {
    state = {
        selectKey:0,
        words:[
            {
                value:2,
                word:"Two",
                matched:false
            },
            {
                value:6,
                word:"Six",
                matched:false
            },
            {
                value:4,
                word:"Four",
                matched:false
            },
            {
                value:1,
                word:"One",
                matched:false
            },
            {
                value:3,
                word:"Three",
                matched:false
            }
        
        ]
    }

    changeMatchedState = () =>{
        console.log("words:",this.state.selectKey)
        let index = this.state.words.map(item => item.value).indexOf(this.state.selectKey)
        let temp_words = [...this.state.words];

        //element is matched
        temp_words[index].matched = true;
        this.setState({
            words:temp_words,
            selectKey:0
        },()=>{
            console.log(this.state.words)
            return true
        })
    }
    //clear selected state when match is error.
    clearSelectedKey = () =>{
        this.setState({
            selectKey:0
        })
    }
    changeState = (value) =>{
        console.log(value)
        this.setState({
            selectKey:value
        })
        this.props.onHandle(value)
    }
  render() { 
      console.log("render") 
    return (
        <div className='Words'>
            <ul className="wordslist1">
                {this.state.words.map((item,index)=>
                <li className={(this.state.selectKey === item.value? "selected":"") + (item.matched === true ? "matched":"") } onClick={()=>this.changeState(item.value)}>{item.word}</li>)}
            </ul>
        </div>
    );
  }
}
