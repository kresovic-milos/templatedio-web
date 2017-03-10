import React, { Component } from 'react'
import { Row, Col, Jumbotron, Button } from 'reactstrap'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (        
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Welcome to templated.io</h1>
              <p className="lead">Create business, inivitation, greeting or any other kind of card with just a few clicks! </p>
              <hr className="my-2" />
              <p>Bind your data (excel, meetup.com, facebbok.com ...) to your own template or choose from our template market!</p>
              <p className="lead">
                <Button color="info" size="lg">Learn More</Button>
                {' '}
                <Link to="/getStarted"><Button color="primary" size="lg">Get Started</Button></Link>
              </p>
            </Jumbotron>
          </Col>
        </Row>        
    )
  }
}

export default Home