import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free To Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3430.0767636368037!2d76.7368603!3d30.716242299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzU4LjUiTiA3NsKwNDQnMTIuNyJF!5e0!3m2!1sen!2sin!4v1705851108424!5m2!1sen!2sin" 
      width="100%" 
      height="350" 
      style={{border:0}} 
      allowFullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xgegoeop" method='POST' className='contact-inputs'>
            <input 
              type="text" 
              name='userName' 
              placeholder='User Name'
              autoComplete='off'
              required
            />

            <input
              type="email" 
              name='Email' 
              placeholder='Your email id'
              autoComplete='off'
              required
            />

            <textarea 
              name="Message" 
              cols="30" 
              rows="10" 
              placeholder='Enter your message...'
              autoComplete='off'
              required
            />

            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact