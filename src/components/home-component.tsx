import React from 'react'
import styled from 'styled-components'

const HomeRoot = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0.25em;
`

export class HomeComponent extends React.Component {
  public render() {
    return (
      <HomeRoot>
        <h1>Home</h1>
        This is home
      </HomeRoot>
    )
  }
}
