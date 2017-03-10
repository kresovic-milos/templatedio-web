export const Steps = {
  CHOOSE_TEMPLATE: 0,
  CHOOSE_DATA_SOURCE: 1,
  BIND: 2,
  FINISH: 3
}

export function getStepColor(step, currentStep) {
  return step === currentStep ? "primary" : "info"
}