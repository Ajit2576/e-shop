import styled from 'styled-components';
import mens from '../assets/Category/mens.jpg';
import womens from '../assets/Category/womens.jpg';
import kids from '../assets/Category/kids.jpg';
import { NavLink } from 'react-router-dom';

function Category() {

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="common-heading">Shop by Category</div>
        <div className="grid grid-three-column">
          
            <div className="card" >
              <NavLink to='/products'>
              <figure>
                <img src={mens} alt="mens" />
                <figcaption>mens</figcaption>
              </figure>
              <div className="card-data">
                <div className="card-data-flex">
                  <h3>mens</h3>
                </div>
              </div>
              </NavLink>
            </div>

            <div className="card" >
              <NavLink to='/products'>
              <figure>
                <img src={womens} alt="womens" />
                <figcaption>womens</figcaption>
              </figure>
              <div className="card-data">
                <div className="card-data-flex">
                  <h3>womens</h3>
                </div>
              </div>
              </NavLink>
            </div>

            <div className="card" >
            <NavLink to='/products'>
              <figure>
                <img src={kids} alt="kids" />
                <figcaption>kids</figcaption>
              </figure>
              <div className="card-data">
                <div className="card-data-flex">
                  <h3>kids</h3>
                </div>
              </div>
              </NavLink>
            </div>
        
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figcaption{
    display: none;
    position: absolute;
    top: 40%;
    text-align: center;
    height: 100%;
    font-size: 4rem;
    color: #fff;
    z-index: 999;
    cursor: pointer;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    &:hover figcaption{
      display: block;
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
      display: flex;
      justify-content: center;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      font-size: 2.5rem;
      font-weight: 700;
      text-shadow: 0.5rem 0.5rem 0.9rem rgb(195, 194, 194);
    }
  }
`;

export default Category

