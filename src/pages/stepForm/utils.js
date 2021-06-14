export const formatQuestionToStore = values =>
  Object.keys(values).map(questionKey => {
    return {[questionKey]: values[questionKey]};
  });

// Not needed
// export const formatStoreToFormik = values => {
//   return values.reduce((acc, item) => {
//     console.log(item);
//     acc = {...acc, ...item};
//     return acc;
//   }, {});
// };

// BreakDown
//pending mock API call
//Stepper redesign
//  if have time add redux store
