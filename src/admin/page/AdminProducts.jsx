import React from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/Button';
import { NavLink } from 'react-router-dom';

function AdminProducts() {
  return (
    <Product>
      <div className="product-section">
        <h2>Products</h2>
        <div>
          <NavLink to='/admin/new-product'>
          <Button>New Product</Button>
          </NavLink>
        </div>
      </div>
    </Product>
  )
}

const Product = styled.section`
  .product-section{
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;

    h2{
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      text-shadow: 0.5rem 0.5rem 0.9rem rgb(195, 194, 194);
    }
  }
`;

export default AdminProducts
