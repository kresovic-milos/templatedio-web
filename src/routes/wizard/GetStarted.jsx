import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class GetStarted extends Component {

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles)
    console.log('Rejected files: ', rejectedFiles)
  }

  render() {
    return (

      <div>
        <h1>Get Started</h1>

        <Dropzone onDrop={this.onDrop}>
          <p>Drop your template here, or click to select file to upload.</p>
        </Dropzone>
      </div>
    )
  }
}

export default GetStarted