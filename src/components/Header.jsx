import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/logo.png'
import Nav from './Nav'
import { Button } from '../styles/Button';

function Header() {
    const location = useLocation();

    return (
        <MainHeader>
            <NavLink to={ !location.pathname.includes("admin") ? "/" : "/admin"}>
                <img className='logo' src={logo} alt="logo" />
            </NavLink>
            {!location.pathname.includes("admin") ? <Nav /> : <Button>LOGOUT</Button>}
        </MainHeader>
    )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
        height: 4rem;
    }
`;

export default Header
