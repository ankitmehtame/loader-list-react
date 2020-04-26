import React from 'react'
import './App.css'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { HomeComponent } from './components/home-component'
import { ArchiveComponent } from './components/archive-component'
import { Menu } from 'semantic-ui-react'

const AppDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
`

const NavDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`

function App() {
  return (
    <Router>
      <AppDiv>
        <NavDiv>
          <Menu inverted={true}>
            <Menu.Item name='home'>
              <Link to='/home'>
                Home
                </Link>
            </Menu.Item>
            <Menu.Item name='archive'>
              <Link to='/archive'>
                Archive
                </Link>
            </Menu.Item>
          </Menu>
        </NavDiv>
        <Switch>
          <Route path='/' exact={true} render={() => <Redirect to='/home' />} />
          <Route path='/home' exact={true} component={HomeComponent} />
          <Route path='/archive' exact={true} component={ArchiveComponent} />
          <Route path='*' render={() => <div>Not found</div>} />
        </Switch>
      </AppDiv>
    </Router>
  )
}

export default App
