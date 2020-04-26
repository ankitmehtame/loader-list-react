import React from 'react'
import { Employee } from './archive-component'
import styled from 'styled-components'

export interface ViewRowComponentProps {
  employee: Employee
}

const Root = styled.div`
  border: solid 1px lightgray;
  margin: 1em;
`

export class ViewRowComponent extends React.Component<ViewRowComponentProps> {
  public render() {
    const e = this.props.employee
    return <Root> 
    <div>{e.name}</div>
    <div>{e.division}</div>
    <div>{e.id}</div>
  </Root>
  }
}