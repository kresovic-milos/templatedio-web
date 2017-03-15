import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setStep, uploadTemplate } from '../../../modules/wizard/actions/actions'

import { Steps } from '../../../utils/ConstantsWizard'

class ChooseTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    this.props.dispatch(setStep(Steps.CHOOSE_TEMPLATE))
  }

  onDrop(acceptedFiles, rejectedFiles) {  
    console.log('Accepted files: ', acceptedFiles)
    console.log('Rejected files: ', rejectedFiles)

    this.setState({
        files: acceptedFiles.slice()
    })
  }

  upload() {
    this.props.dispatch(uploadTemplate(this.state.files[0]))    
  }

  render() {

    return (

      <div>
        <h1>Choose Template</h1> <br/>

        <Dropzone onDrop={(acceptedFiles, rejectedFiles) => this.onDrop(acceptedFiles, rejectedFiles)} accept="image/vnd.adobe.photoshop">
          <p>Drop your template here, or click to select file to upload.</p>
        </Dropzone>

        {this.state.files.length > 0 ? <div>
          {/*<h2>Uploading {this.state.files.length} files...</h2>*/}
          <div>{this.state.files.map((file, i) => <div key={i}><img width="36px" height="36px" alt="preview" src={require('../../../../res/icons/psd.png')}/> {file.name}</div>)}</div>
        </div> : null}

        <br/>

        <Button disabled={this.state.files.length === 0} color="primary" size="lg" onClick={() => this.upload()}>Upload</Button>

      </div>
    )
  }
}

export default connect()(ChooseTemplate)