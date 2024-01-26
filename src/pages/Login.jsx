import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Container'

function Login() {
    return (
        <LoginWrapp>
            <Container>
                <div className='form-main'>
                    <div>
                        <h3>Login</h3>
                    </div>
                    <div>
                        <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                            <input type="password" name="password" id="password" placeholder='Enter your Password' />
                        </form>
                    </div>
                </div>
            </Container>
        </LoginWrapp>
    )
}

const LoginWrapp = styled.section`

    .form-main{
        border: 1px solid red;
        max-width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default Login
