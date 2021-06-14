import * as yup from 'yup';

//Not needed for now
// export const validationSchema = yup.object().shape({
//   question1: yup.string().required(),
//   question2: yup.string().required(),
//   question3: yup.string().required(),
//   question4: yup.string().required(),
// });

export const stepOneValidationSchema = yup.object().shape({
  question1: yup.string().required(),
  question2: yup.string().required(),
});

export const stepTwoValidationSchema = yup.object().shape({
  question3: yup.string().required(),
  question4: yup.string().required(),
});
