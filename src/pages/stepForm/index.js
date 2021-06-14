import React from 'react';

import {StepOne, StepTwo, ReviewStep} from './components';
import {useSelector} from 'react-redux';

function StepForm() {
  const stepName = useSelector(state => state.stepName);
  const types = {
    StepOne: StepOne,
    StepTwo: StepTwo,
    ReviewStep: ReviewStep,
  };
  let $Component = types[stepName];

  return <$Component />;
}

export default StepForm;
