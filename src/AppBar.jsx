import React, { Component } from 'react'
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap'


class AppBar extends Component {
  render() {
    return (
        <Row>
          <Col>

            <Navbar toggleable>
              <NavbarBrand href="/">templated.io</NavbarBrand>
            </Navbar>

          </Col>
        </Row>
    )
  }
}

export default AppBar
