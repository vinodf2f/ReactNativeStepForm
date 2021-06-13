export const initialState = {
  activeStep: 1,
  stepName: 'StepOne',
  questions: [],
};

export const actionTypes = {
  NEXT_STEP: 'nextStep',
  PREV_STEP: 'previousStep',
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        activeStep: payload.stepNo,
        stepName: payload.stepName,
        questions: [...state.questions, ...payload.questions],
      };
    case actionTypes.PREV_STEP:
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    default:
      return state;
  }
};
