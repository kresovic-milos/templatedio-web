import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setStep } from '../../../modules/wizard/actions/actions'

import { Steps } from '../../../utils/ConstantsWizard'

class ChooseDataSource extends Component {

  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
  }

  componentDidMount() {
  }

  onDrop(acceptedFiles, rejectedFiles) {    
    console.log('Accepted files: ', acceptedFiles)
    console.log('Rejected files: ', rejectedFiles)

    this.setState({
        files: acceptedFiles.slice()
    })

    console.log('1 files: ', this.state.files)
  }

  upload() {
    console.log('upload file')
  }

  render() {

  console.log('files: ', this.state.files)

    return (

      <div>
        <h1>Choose Data Source</h1> <br/>        

        <Dropzone onDrop={(acceptedFiles, rejectedFiles) => this.onDrop(acceptedFiles, rejectedFiles)} accept="image/vnd.adobe.photoshop">
          <p>Drop your data source here, or click to select file to upload.</p>
        </Dropzone>

        {this.state.files.length > 0 ? <div>
          {/*<h2>Uploading {this.state.files.length} files...</h2>*/}
          <div>{this.state.files.map((file, i) => <div key={i}><img width="36px" height="36px" alt="preview" src={require('../../../../res/icons/xls.png')}/> {file.name}</div>)}</div>
        </div> : null}

        <button type="button" disabled={this.state.files.length === 0} onClick={this.upload}>Upload</button>

      </div>
    )
  }
}

export default connect()(ChooseDataSource)