import React from 'react'
import LeftBar from '../components/LeftBar'
import styled from 'styled-components'

function AdminHome() {
    return (
        <AdminMain>
            <h2>Dashboard</h2>
            <div className='dashlist'>
                <div className="section-1">
                    <h3>Products</h3>
                </div>
                <div className="section-1">
                    <h3>Orders</h3>
                </div>
                <div className="section-1">
                    <h3>Users</h3>
                </div>
                <div className="section-1">
                    <h3>Baad May</h3>
                </div>
            </div>
        </AdminMain>
    )
}

const AdminMain = styled.section`
    h2{
        text-align: center;
        padding: 2rem 0;
        font-size: 4rem;
        font-weight: 700;
        text-shadow: 0.5rem 0.5rem 0.9rem rgb(195, 194, 194);
    }

    .dashlist{
        display: grid;
        grid-template-columns: repeat(2, 35vw);
        grid-template-rows: repeat(2, 30vh);
        justify-content: center;
        gap: 5rem;

        .section-1{
            background-color: ${({ theme }) => theme.colors.bg};
            box-shadow: 5px 5px 5px 0 #eae9e9;
            padding: 2rem;
        }
    }
@media (max-width: ${({ theme }) => theme.media.tab}) {
    
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .dashlist{
        grid-template-columns: repeat(1, 75vw);
        grid-template-rows: repeat(4, 30vh);
    }
}

`;

export default AdminHome
