import React from 'react'
import styled from 'styled-components'

function Orders() {
  return (
    <Order>
      <h2>Orders</h2>
    </Order>
  )
}

const Order = styled.section`
  h2{
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      text-shadow: 0.5rem 0.5rem 0.9rem rgb(195, 194, 194);
  }
`

export default Orders