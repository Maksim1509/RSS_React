import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './Form.scss';
import { FormData } from '../../types/types';
import { useAppDispatch } from '../../hooks/hooks';
import { addFormCard } from '../../store/formCardsSlice';

const categoryValidate = (value: string): boolean => !!value;
const conditionValidate = (value: string | null): boolean => !!value;

const Form = () => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<FileList>();
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const hendleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    setFile(files);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (file) {
      dispatch(addFormCard({ ...data, file }));
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      setModal(true);
      reset();
    }
    const id = setTimeout(() => setModal(false), 3000);
    return () => clearTimeout(id);
  }, [reset, isSubmitSuccessful]);

  return (
    <>
      {modal && <div className="modal">Card added successfully</div>}
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
        <input
          type="file"
          {...register('file', { required: 'Add image' })}
          onChange={hendleFileInput}
        />
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
        <button className="form__submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
