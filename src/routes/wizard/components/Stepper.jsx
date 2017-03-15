import React from 'react'
import { Progress } from 'reactstrap'
import { Steps, getStepColor } from '../../../utils/ConstantsWizard'

const Stepper = (props) => {


    return (
        <Progress multi>
            <Progress bar color={getStepColor(Steps.CHOOSE_TEMPLATE, props.currentStep)} value="20">Template</Progress>
            <Progress bar color={getStepColor(Steps.CHOOSE_LAYERS, props.currentStep)} value="20">Layers</Progress>
            <Progress bar color={getStepColor(Steps.CHOOSE_DATA_SOURCE, props.currentStep)} value="20">Data</Progress>
            <Progress bar color={getStepColor(Steps.BIND, props.currentStep)} value="20">Bind</Progress>
            <Progress bar color={getStepColor(Steps.FINISH, props.currentStep)} value="20">Finish</Progress>
        </Progress>
    )
}

export default Stepper