import React from 'react'
import styled from 'styled-components';
import { PiUserCircle } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { TbBoxSeam } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useCartContext } from '../context/cart_context';

function User() {
    const { total_item } = useCartContext();

  return (
    <Main>
        <div className="box">
            <PiUserCircle size={"3.2rem"}/>
            <p style={{fontSize:"2rem"}}>Account</p>
            <IoIosArrowDown size={"1.8rem"} className='down'/>
        </div>
        <div className="box-option">
            <NavLink>
                <span className="user-details">
                    <PiUserCircle size={"2.4rem"} />
                    My Profile
                </span>
            </NavLink>
            <NavLink to="/cart">
                <span className="user-details">
                    <TbBoxSeam  size={"2.4rem"} strokeWidth={"1.5"}/>
                    Orders
                </span> 
            </NavLink>
            <NavLink to="/cart">
                <span className="user-details">
                    <AiOutlineHeart size={"2.4rem"}/>
                    Wishlist <span>({total_item})</span>
                </span>
            </NavLink>
            <NavLink>
                <span className="user-details">
                    <IoLogOutOutline size={"2.4rem"}/>
                    Logout
                </span>
            </NavLink>
        </div>
    </Main>
  )
}

const Main = styled.section`
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 5px;
        cursor: pointer;
        position: relative;

        .down{
            transition: 0.3s linear;
        }
        
    }&:hover{
        .box{
            outline: 1px solid gray;
            border-radius: 10px;
            background-color: #e5e5e53f;
        }
        .down{
            transform : rotate(180deg);
            transition: 0.3s linear;
        }
        .box-option{
            display: flex;
        }
    }
    
    .box-option{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        background-color: #fff;
        margin-top: 2px;
        padding: 2rem;
        z-index: 999;
        display: none;

        a{
            font-size: 1.6rem;
            color: #000;
            padding-right: 2rem;
        }

        .user-details{
            display: flex;
            align-items: center;
            gap: 5px;

            &:hover{
                color: rgb(98 84 243);
            }
        }
        .wish-list{
            border: 1px solid gray;
            border-radius: 50%;
            padding: 5px;
        }
    }

`

export default User


