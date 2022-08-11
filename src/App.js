import React, {Component} from 'react';
import styled from 'styled-components';
import ButtonsFooter from './Components/ButtonFooter';
import Header from './Components/Header';
import Main from './Components/Main';


const AppContainer = styled.div`
  background-color: #d29e00;
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class App extends Component {
  render(){
    return(
      <AppContainer>
        <Header />
        <Main />
        <ButtonsFooter />
      </AppContainer>
    )
  }
}


