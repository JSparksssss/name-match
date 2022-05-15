import React, { Component } from 'react';
import logo from './logo.svg';
import './match.css';
import { useImperativeHandle,forwardRef } from 'react';
export default class Numbers extends Component {
        state = {
                selectKey:0,
                numbers:[
                {
                    value:3,
                    matched:false,
                },
                {
                    value:4,
                    matched:false,
                },
                {
                    value:2,
                    matched:false,
                },
                {
                    value:5,
                    matched:false,
                },
                {
                    value:1,
                    matched:false,
                }
            ]
        }
    changeMatchedState = () =>{
        let index = this.state.numbers.map(item => item.value).indexOf(this.state.selectKey)
        let temp_numbers = [...this.state.numbers];
        temp_numbers[index].matched = true;
        this.setState({
            numbers:temp_numbers,
            selectKey:0,
        },()=>{
            console.log(this.state.numbers);
            return true;
        })
    }

    clearSelectedKey = () =>{
        this.setState({
            selectKey:0,
        })
    }

    changeState = (value) =>{
        console.log(value);
        this.setState({
            selectKey:value,
        }) 
        this.props.onHandle(value);

    }
    render() {
        return (
            <div className="Numbers">
                <ul className="wordslist2">
                    {this.state.numbers.map((number,index)=><li className = { (this.state.selectKey === number.value ? "selected":"") + (number.matched === true ? "matched":"")} onClick={()=>this.changeState(number.value)}>{number.value}</li>)}
                </ul>
            </div>
           
        );
    }
}
