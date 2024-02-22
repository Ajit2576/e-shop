import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import FormValidation from '../components/FormValidation';
import axios from 'axios';
import { toast } from 'sonner';

function Login() {

  const [isUser, setIsUser] = useState(localStorage.getItem("User"))

  const navigate = useNavigate()

  const location = useLocation()
  const [errors, setError] = useState({})

  let init = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    conformPassword: ''
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    conformPassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  useEffect(()=>{
    console.log(isUser)
  },[])

  const handleLogin = (e) => {
    e.preventDefault()
    setError(FormValidation(formData))

    let bodyContaintLogin = {
      email: formData.email,
      password: formData.password
    };
    let reqOptions = {
      url: "http://localhost:8000/api/user/login",
      method: "POST",
      data: bodyContaintLogin,
    }
    axios.request(reqOptions)
      .then((res) => {

        //Local Storage
        localStorage.setItem("User", JSON.stringify(res.data))

        if (res.data.userType === "admin") {
          return navigate("/admin")
        } else {
          return navigate("/")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleSignup = (e) => {
    e.preventDefault()

    let bodyContaint = {
      name: formData.name,
      email: formData.email,
      mobileNumber: formData.mobile,
      password: formData.password,
      conformPassword: formData.conformPassword
    };
    let reqOptions = {
      url: "http://localhost:8000/api/user/signup",
      method: "POST",
      data: bodyContaint,
    }
    axios.request(reqOptions)
      .then((res) => {
        toast.success(" Sign up Sucessfully")
        setFormData(init)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <Wrapper>
      <div className='login'>
        {location.pathname === "/login" ? <p className='pera'>Login in your account</p> : location.pathname === "/signup" ? <p className='pera'>Create an account</p> : <p className='pera'>Forgot Password</p>}
        <div className='log-form'>
          <form>
            {location.pathname === "/signup" &&
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />}

            {location.pathname === "/login" && errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>}
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder='Enter your email'
              onChange={handleChange}
            />

            {location.pathname === "/signup" &&
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                placeholder='Enter your mobile Number'
                onChange={handleChange}
              />}

            {location.pathname === "/login" && errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>}
            {location.pathname !== "/forgot" &&
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                placeholder='Enter your password'
                onChange={handleChange}
              />}

            {location.pathname === "/signup" &&
              <input
                type="password"
                name="conformPassword"
                id="conformPassword"
                value={formData.conformPassword}
                placeholder='conform your password'
                onChange={handleChange}
              />}

            {location.pathname === "/login" && <p className='p-1'><NavLink to="/forgot">Forgot Password?</NavLink></p>}

            {location.pathname === "/login" ? <Button onClick={handleLogin}>SIGN IN</Button> : location.pathname === "/signup" ? <Button onClick={handleSignup}>SIGN UP</Button> : <Button>SEND REQUEST</Button>}
          </form>
        </div>
        {location.pathname === "/login" ? <p className='p-3'>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p> : location.pathname === "/signup" ? <p className='p-3'>Already have account? <NavLink to="/login">Sign in</NavLink></p> : <p className='p-3'>Remember your password? <NavLink to="/login">Login</NavLink></p>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

  .pera{
    margin-bottom: 3rem;
    font-size: 2rem;
    color: rgb(98 84 243);
  }
  .p-1{
    text-align: end;
    margin-bottom: 2rem;
  }
  .p-3{
    text-align: center;
    padding: 2rem;
  }

  .login{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 4rem;

    form{
    display: flex;
    flex-direction: column;

      input{
        width: 350px;
        text-transform: lowercase;
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .login{
      padding: 2rem;
      form{
        input{
          width: 80vw;
        }
      }
    }
  }
`;

export default Login
