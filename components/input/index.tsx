import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
interface Props {
  value?: any;
  placeholder?: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  required?: boolean;
}
const Input: React.FC<Props> = ({
  register,
  name,
  required = false,
  type,
  placeholder
}) => {
  const s = useStyles(styles);
  return (
    <div className={s('input-wrapper')}>
      <input
        placeholder={placeholder}
        className={s('input')}
        {...register(name, {
          required: required,
          onChange: (e) => {}
        })}
        type={type}
      />
      <span className={s('error')}></span>
    </div>
  );
};

export default Input;
