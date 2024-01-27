import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Container'

function Login() {
    return (
        <Wrapper>
            <Container>
                <div className='form-main'>
                    <div className='form-details'>
                        <h2>Login</h2>
                        <form action="" style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                            <input type="password" name="password" id="password" placeholder='Enter your Password' />
                        </form>
                            <input type="submit" value="login" />
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    .form-main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;

        .form-details{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            box-shadow: 15px 15px 15px 12px #eae9e9;
            padding: 2rem;

            input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            justify-content: center;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
        }
        h2{
            font-size: 3rem;
        }
    }
    }
`

export default Login
