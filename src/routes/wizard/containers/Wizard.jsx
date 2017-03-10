import React, { Component } from 'react'
import { Progress } from 'reactstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Steps, getStepColor } from '../../../utils/ConstantsWizard'

class Wizard extends Component {

// constructor(props) {
//     super(props)
//     this.state = {
//       currentStep: 0
//     }
//   }

    render() {
        return (
            <div>

                <br/>

                <Progress multi>
                    <Progress bar color={getStepColor(Steps.CHOOSE_TEMPLATE, this.props.currentStep)} value="25">Template</Progress>
                    <Progress bar color={getStepColor(Steps.CHOOSE_DATA_SOURCE, this.props.currentStep)} value="25">Data</Progress>
                    <Progress bar color={getStepColor(Steps.BIND, this.props.currentStep)} value="25">Bind</Progress>
                    <Progress bar color={getStepColor(Steps.FINISH, this.props.currentStep)} value="25">Finish</Progress>
                </Progress>

                <br/>

                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.reducer_step.step
  }
}

export default connect(mapStateToProps)(Wizard)