import React, {useReducer} from 'react';

import {StepOne, StepTwo, ReviewStep} from './components';
import {reducer, initialState} from './reducer';
import StepperHoc from '../../components/Stepper';

export default function StepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const types = {
    StepOne: StepOne,
    StepTwo: StepTwo,
    ReviewStep: ReviewStep,
  };
  let $Component = types[state.stepName];

  return (
    <StepperHoc activeStep={state.stepName}>
      <$Component storeProps={state} dispatch={dispatch} />
    </StepperHoc>
  );
}
