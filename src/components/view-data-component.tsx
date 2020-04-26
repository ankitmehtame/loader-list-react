import React from 'react'
import { Employee } from './archive-component'
import { ViewRowComponent } from './view-row-component'
import styled from 'styled-components'
import { Loader } from 'semantic-ui-react'
// import ReactDOM from 'react-dom'

interface ViewDataState {
  // isMounting: boolean
  // employees: Employee[]
  scrollPos: number
}

export interface ViewDataProps {
  employees: Employee[]
}

const Root = styled.div`
  height: 100%;
  overflow-y: auto;
`

export class ViewDataComponent extends React.Component<ViewDataProps, ViewDataState> {
  private isUpdatingWithLargeData: boolean = true
  private isUpdatingFirstTime = true
  private rootRef = React.createRef<HTMLDivElement>()

  constructor(props: ViewDataProps) {
    super(props)
    this.state = {
      // isMounting: true
      // employees: []
      scrollPos: 0
    }
  }

  public componentWillMount() {
    this.isUpdatingWithLargeData = true
  }

  public componentDidMount() {
  }

  public componentWillUnmount() {
    this.isUpdatingFirstTime = true
    const domNode = this.rootRef.current
    const scrollTop = domNode?.scrollTop
    if (scrollTop !== undefined && scrollTop !== null) {
      localStorage.setItem('view-data-scroll-top', scrollTop.toString())
      console.log('scroll pos', domNode?.scrollTop)
    }
  }

  public componentWillUpdate(newProps: ViewDataProps) {
    console.log(`will update employees=${this.props.employees.length} newEmployees=${newProps.employees.length}`)
    this.isUpdatingWithLargeData = this.props.employees !== newProps.employees
  }

  public componentDidUpdate(prevProps: ViewDataProps) {
    console.log(`did update employees=${this.props.employees.length} prevEmployees=${prevProps.employees.length}`)
    const isUpdatingWithLargeData = this.isUpdatingWithLargeData
    const isUpdatingFirstTime = this.isUpdatingFirstTime
    this.isUpdatingWithLargeData = false
    this.isUpdatingFirstTime = false
    if (isUpdatingWithLargeData) {
      setTimeout(() => {
        this.forceUpdate()
        if (isUpdatingFirstTime) {
          const scrollTopText = localStorage.getItem('view-data-scroll-top')
          if (scrollTopText) {
            const scrollTop = Number(scrollTopText)
            if (scrollTop) {
              this.rootRef?.current?.scrollTo({ top: scrollTop })
            }
          }
        }
      }, 10)
    }
  }

  public render() {
    const employees = this.props.employees
    return <Root ref={this.rootRef}>
      {this.isUpdatingWithLargeData ? <Loader active /> : null}
      {this.isUpdatingWithLargeData ? null : employees.map((e) => (
        <ViewRowComponent employee={e}></ViewRowComponent>
      ))}
    </Root>
  }
}
