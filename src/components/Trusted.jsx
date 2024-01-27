import React from "react";
import styled from 'styled-components'
import adidas from '../assets/Brands/adidas.png'
import asics from '../assets/Brands/asics.png'
import nike from '../assets/Brands/nike.png'
import puma from '../assets/Brands/puma.png'
import reebok from '../assets/Brands/reebok.png'

function Trusted() {
  return (
    <Wrapper className='brand-section'>
        <div className="container">
            <h3>Trusted by 100+ Companies</h3>
            <div className="brand-section-slider">
                <div className="slide">
                    <img src={adidas} alt="adidas logo" />
                </div>
                <div className="slide">
                    <img src={asics} alt="asics logo" />
                </div>
                <div className="slide">
                    <img src={nike} alt="nike logo" />
                </div>
                <div className="slide">
                    <img src={puma} alt="puma logo" />
                </div>
                <div className="slide">
                    <img src={reebok} alt="reebok logo" />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 4rem 0;
    background-color: ${({theme }) => theme.colors.bg};

    .brand-section{
        padding: 12rem 0 0 0;
    }
    h3{
        text-align: center;
        text-transform: capitalize;
        color: ${({theme}) => theme.colors.text};
        font-size: 2rem;
        font-weight: bold;
    }

    img{
        width: 10rem;
        filter: contrast(0%) ;
    }

    .brand-section-slider{
        margin-top: 3.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}){
        .brand-section-slider{
            margin-top: 3.2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;
        }
    }
`
export default Trusted
