import React from 'react'
import styled from 'styled-components'

function Users() {
  return (
    <UserWrapper>
      <h2>Users</h2>
    </UserWrapper>
  )
}

const UserWrapper = styled.section`
  h2{
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    text-shadow: 0.5rem 0.5rem 0.9rem rgb(195, 194, 194);
  }
`                                                                                                                      

export default Users