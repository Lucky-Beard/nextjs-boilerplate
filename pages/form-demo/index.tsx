import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import React from 'react';
import GenericForm from '@/components/forms/generic-form';
import { FormProps } from '../../components/forms/generic-form/index';
import Input from '@/components/input';
import { usePostFormMutation } from 'services/pokemon';

interface Props {
  children: Array<any>;
}

const FormDemo : React.FC<Props> = ({ children }) => {
    const s = useStyles(styles);

    const fields = [
        {
            type: 'name',
            name: 'name',
            placeholder: 'Name',
            required: true,
            label: 'Name',
            autoComplete: 'name'
          },{
            type: 'email',
            name: 'email',
            placeholder: 'Email address',
            required: true,
            label: 'Email',
            autoComplete: 'email'
          }
      ];

    const formRender = ({ register, errors, isSubmitting }: FormProps) => {
        return (<div className={s('form-container')}>
        {fields.map((field) => {
          return (
            <React.Fragment key={field.name}>
              {/* <label htmlFor={field.name}>{field.label}</label> */}
              <Input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                register={register}
              />
              <div className="error">{errors[field.name]?.message}</div>
            </React.Fragment>
          );
        })}

        <button
          disabled={isSubmitting}
        >
          {isSubmitting ? <div> loading . . . </div> : 'Submit'}
        </button>
      </div>);
    };
  return <div className={s('form-demo')}>
    <GenericForm usePostMutation={usePostFormMutation} renderForm={formRender} />
  </div>;
};

export default FormDemo;
