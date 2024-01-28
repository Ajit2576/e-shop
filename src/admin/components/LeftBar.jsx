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
    width: 15vw;
    
        .head{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            gap: 2rem;
        }

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 30vw;
}
`;

export default LeftBar
