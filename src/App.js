import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import Home from './routes/home/Home'
import AppBar from './AppBar'


class App extends Component {
  render() {
    return (
      <Container>
        <AppBar/>
        {this.props.children}
      </Container>
    )
  }
}

export default App
