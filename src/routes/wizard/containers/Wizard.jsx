import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit'
import Stepper from '../components/Stepper'

class Wizard extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.router.isActive(this.props.currentStep.path) && this.props.currentStep.index > prevProps.currentStep.index) {
            this.props.router.push(this.props.currentStep.path)
        }
    }

    render() {
        return (
            <div>

                <Stepper currentStep={this.props.currentStep} />

                { this.props.children }

                { this.props.isUploading && <Spinner spinnerName="cube-grid"/> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isUploading: state.template.isUploading,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps)(Wizard)