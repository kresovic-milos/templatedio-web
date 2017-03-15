export const Steps = {
  CHOOSE_TEMPLATE: { index: 0, path:'/chooseTemplate' },
  CHOOSE_LAYERS: { index: 1, path:'/chooseLayers' },
  CHOOSE_DATA_SOURCE: { index: 2, path:'/chooseDataSource' },
  BIND: { index: 3, path:'' },
  FINISH: { index: 4, path:'' }
}

export function getStepColor(step, currentStep) {
  return step.index === currentStep.index ? "primary" : "info"
}