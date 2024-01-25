import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function LeftBar() {
    return (
        <Leftbar>
            <div className='head'>
                <NavLink to='/admin'>
                    <h3>Dashboard</h3>
                </NavLink>
                <NavLink to='/admin/products'>
                    <h3>Products</h3>
                </NavLink>
                <NavLink to='/admin/orders'>
                    <h3>Orders</h3>
                </NavLink>
                <NavLink to='/admin/users'>
                    <h3>Users</h3>
                </NavLink>
            </div>
        </Leftbar>
    )
}

const Leftbar = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 5rem 0;
    /* height: calc(100vh - 10rem); */
    width: 15vw;
    
        .head{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            gap: 2rem;
        }
`;

export default LeftBar
