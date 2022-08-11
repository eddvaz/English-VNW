import React, {Component} from 'react';
import styled from 'styled-components';


const ButtonsContainer = styled.div`
    width: 100%;
    height: 180px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Counter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid;
    border-radius: 20px;
    height: 60px;
    width: 95%;

    button{
        border: none;
        background-color: #d29e00;
        font-size: 2rem;
    }
`

const AddCartButton = styled.button`
    width: 95%;
    border-radius: 20px;
    border: none;
    height: 60px;
    background-color: black;
    color: white;
`

export default class ButtonsFooter extends Component{
    state = {
        counter: 0
    }

    Add = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        if(this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render() {
        return(
            <ButtonsContainer>
                <Counter>
                    <button onClick={this.decrement}>-</button>
                    <p>{this.state.counter}</p>
                    <button onClick={this.Add}>+</button>
                </Counter>
                <AddCartButton>ADD TO CART</AddCartButton>
            </ButtonsContainer>
        )
    }
}