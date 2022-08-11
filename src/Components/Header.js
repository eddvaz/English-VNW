import React, {Component} from 'react';
import MenuHamburguer from "../assets/hamburger.png";
import Bag from "../assets/bag.png";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 90%;
    height: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff71;
    padding: 8px;
    margin-top: 16px;

    img{
        width: 20px;
        height: 20px;
    }

    p{
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
    }
`

export default class Header extends Component {
    render(){
        return(
            <HeaderContainer>
                <img src={MenuHamburguer} alt="menu hamburguer" />
                <p>Flavo</p>
                <img src={Bag} />
            </HeaderContainer>
        )
    }
}