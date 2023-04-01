import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './Form.scss';

type Inputs = {
  name: string;
  date: string;
  category: string;
  condition: string | null;
  file: FileList;
  checkbox: boolean;
};

const categoryValidate = (value: string): boolean => !!value;
const conditionValidate = (value: string | null): boolean => !!value;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    console.log(data);
  };
  console.log(errors);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`form__field ${errors.name ? 'form__field_error' : ''}`}
        type="text"
        placeholder="Name"
        {...register('name', {
          required: 'Enter your name',
        })}
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className="form__error">{message}</p>}
      />
      <input
        className={`form__field ${errors.date ? 'form__field_error' : ''}`}
        type="date"
        data-testid="form-date"
        {...register('date', {
          required: 'Select date',
        })}
      />
      <ErrorMessage
        errors={errors}
        name="date"
        render={({ message }) => <p className="form__error">{message}</p>}
      />
      <label className="form__label">
        Category
        <select
          className={`form__field ${errors.category ? 'form__field_error' : ''}`}
          {...register('category', {
            validate: (value) => categoryValidate(value) || 'Select category',
          })}
        >
          <option value="">-- select --</option>
          <option value="smartphone">smartphone</option>
          <option value="laptop">laptop</option>
          <option value="other">other</option>
        </select>
      </label>
      <ErrorMessage
        errors={errors}
        name="category"
        render={({ message }) => <p className="form__error">{message}</p>}
      />
      <div className="form__wrap-radio">
        <h3 className="form__field-title">Condition</h3>
        <label>
          New
          <input
            type="radio"
            value="new"
            {...register('condition', {
              validate: (value) => conditionValidate(value) || 'Select condition',
            })}
          />
        </label>
        <label>
          Used
          <input type="radio" value="used" {...register('condition')} />
        </label>
      </div>
      <ErrorMessage
        errors={errors}
        name="condition"
        render={({ message }) => <p className="form__error">{message}</p>}
      />
      <input type="file" {...register('file', { required: 'Add image' })} />
      <ErrorMessage
        errors={errors}
        name="file"
        render={({ message }) => <p className="form__error">{message}</p>}
      />
      <label className="form__checkbox">
        I agree with the posting rules
        <input type="checkbox" {...register('checkbox', { required: 'Accept the agreement' })} />
      </label>
      <ErrorMessage
        errors={errors}
        name="checkbox"
        render={({ message }) => <p className="form__error">{message}</p>}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
