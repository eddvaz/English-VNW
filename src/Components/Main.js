import React, {Component} from "react";
import Cosiness from "../assets/cosiness.png";
import styled from "styled-components";


const MainContainer = styled.div`
    height: 700px;
    font-family: 'Roboto', sans-serif;
`

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 400px;
    }
`

const ProductPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px;

    p{
        font-size: 2rem;
    }
`

const ProductsIngredients = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 8px;
`

const DescriptionProduct = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
`

const ProductWheight = styled.div`
    display: flex;
    gap: 80px;
    margin-top: 50px;
    padding-left: 8px;
`

export default class Main extends Component {
    render(){
        return(
            <MainContainer>
                <ImgContainer>
                    <img src={Cosiness} />
                </ImgContainer>              
                <ProductPrice>
                    <h1>Passion</h1>
                    <p>$ 15</p>
                </ProductPrice>
                <ProductsIngredients>
                    <h2>Whats inside?</h2>
                    <p>Chili, oregano, safran, paprika </p>
                </ProductsIngredients>
                <DescriptionProduct>
                    <h2>Why we love it</h2>
                    <p>This one will add a little savoury flevour to any food and turn any meal to a culinary masterpiece.</p>
                </DescriptionProduct>
                <ProductWheight>
                    <div>
                        <input type="radio" name="op" value="op1" id="75g" />
                        <label for="75g">Bag 75g</label>
                    </div>
                    <div>
                        <input type="radio" name="op" value="op2" id="150g" />
                        <label for="150g">JAR 150g</label>
                    </div>
                </ProductWheight>
            </MainContainer>
        )
    }
}