export const formatQuestionToStore = values =>
  Object.keys(values).map(questionKey => {
    return {[questionKey]: values[questionKey]};
  });
