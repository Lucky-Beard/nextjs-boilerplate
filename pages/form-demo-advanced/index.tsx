import React from 'react';
import {
  Formik,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers
} from 'formik';
import * as Yup from 'yup';
import './index.module.scss';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Pasword must be 8 or more characters')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      'Password ahould contain at least one uppercase and lowercase character'
    )
    .matches(/\d/, 'Password should contain at least one number')
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      'Password should contain at least one special character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
});

const FormDemoAdvanced: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="main">
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, isValid, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <Field
                name="name"
                type="text"
                className={errors.name ? 'error' : ''}
              />
              <ErrorMessage className="error" name="name" component="div" />
            </label>
            <label htmlFor="email">
              Email:
              <Field
                name="email"
                type="email"
                className={errors.email ? 'error' : ''}
              />
              <ErrorMessage className="error" name="email" component="div" />
            </label>

            <label htmlFor="password">
              Password:
              <Field
                name="password"
                type="password"
                className={errors.password ? 'error' : ''}
              />
              <ErrorMessage className="error" name="password" component="div" />
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password:
              <Field
                name="confirmPassword"
                type="password"
                className={errors.confirmPassword ? 'error' : ''}
              />
              <ErrorMessage
                className="error"
                name="confirmPassword"
                component="div"
              />
            </label>
            <button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormDemoAdvanced;
