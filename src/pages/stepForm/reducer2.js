//Set questions here
export const INTIAL_QUESTIONS = [
  {question1: ''},
  {question2: ''},
  {question3: ''},
  {question4: ''},
];

export const initialState = {
  activeStep: 1,
  stepName: 'StepOne',
  questions: INTIAL_QUESTIONS,
};

export const actionTypes = {
  NEXT_STEP: 'nextStep',
  PREV_STEP: 'previousStep',
  SUBMIT: 'submit',
};

export const stepFormReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        activeStep: payload.stepNo,
        stepName: payload.stepName,
        questions: payload.questions,
      };
    case actionTypes.PREV_STEP:
      return {
        ...state,
        activeStep: state.activeStep - 1,
        stepName: payload.stepName,
      };
    case actionTypes.SUBMIT:
      return initialState;
    default:
      return state;
  }
};
