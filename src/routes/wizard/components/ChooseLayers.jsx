import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setStep, uploadTemplate } from '../../../modules/wizard/actions/actions'
import GraphicEditor from './GraphicEditor'

import { Steps } from '../../../utils/ConstantsWizard'

class ChooseLayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  next() {
    this.props.dispatch(setStep(Steps.CHOOSE_DATA_SOURCE))
  }

  render() {

    return (

      <div>
        <h1>Choose Layers</h1> <br/>

        <GraphicEditor/>

        <br/>

        <Button color="primary" size="lg" onClick={() => this.next()}>Next</Button>

      </div>
    )
  }
}

export default connect()(ChooseLayers)