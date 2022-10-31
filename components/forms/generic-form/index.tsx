import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import { useConfirmRedirectIfDirty } from '@/hooks/useConfirmRedirectIfDirty';
import { FormDataType } from '../../../types/form-data';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { isFetchBaseQueryError, isErrorWithMessage } from 'services/helpers';
async function saveFormData(data: FormDataType, postForm: any) {
  try {
   const temp = await postForm(data).unwrap();
   console.log(temp);
   return temp;
  } catch (err) {
    return err;
    if (isFetchBaseQueryError(err)) {
      // you can access all properties of `FetchBaseQueryError` here
    } else if (isErrorWithMessage(err)) {
      // you can access a string 'message' property here
      // enqueueSnackbar(err.message, { variant: 'error' });
    };
  }
}

type Props = {
  usePostMutation: UseMutation<any>;
  renderForm: (formProps: FormProps) => React.ReactNode;
};

// All values that come from useForm, to be used in our custom forms
export type FormProps = {
  register: UseFormRegister<FieldValues>;
  isSubmitting: boolean;
  errors: { [error: string]: any };
};

function GenericForm({ usePostMutation, renderForm }: Props) {
  const [postForm] = usePostMutation();
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors, isDirty }
  } = useForm();

  // Confirm redirects when isDirty is true
  useConfirmRedirectIfDirty(isDirty);

  // Submit handler which displays errors + success messages to the user
  const onSubmit = async (data: any) => {
    const response = await saveFormData(data, postForm);
    if (response.status === 400) {
      // Validation error, expect response to be a JSON response {"field": "error message for that field"}
      const fieldToErrorMessage: { [fieldName: string]: string } =
        await response.json();
      for (const [fieldName, errorMessage] of Object.entries(
        fieldToErrorMessage
      )) {
        setError(fieldName, { type: 'custom', message: errorMessage });
      }
    } else if (response.ok) {
      // successful
      toast.success('Successfully saved');
    } else {
      // unknown error
      toast.error(
        'An unexpected error occurred while sending, please try again'
        );
        console.error(response);
    }
  };

  // Sets the default value of the form once it's available
  //   useEffect(() => {
  //     if (data === undefined) {
  //       return; // loading
  //     }
  //     reset(data);
  //   }, [reset, data]);

  // Handle errors + loading state
  //   if (error) {
  //     return (
  //       <div>An unexpected error occurred while loading, please try again</div>
  //     );
  //   } else if (!data) {
  //     return <div>Loading...</div>;
  //   }

  // Finally, render the form itself
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderForm({ register, errors, isSubmitting })}
      <ToastContainer position="bottom-center" />
    </form>
  );
}

export default GenericForm;
