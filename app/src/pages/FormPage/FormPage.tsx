import Form from '../../components/Form/Form';
import React from 'react';
import './FormPage.scss';
import FormCardList from '../../components/FormCardList/FormCardList';
import { useAppSelector } from '../../hooks/hooks';

const FormPage = () => {
  const { cards } = useAppSelector((state) => state.formCards);

  return (
    <section className="form-page">
      <h2 className="form-page__title">Form</h2>
      <section className="form-page__form">
        <Form />
      </section>
      <section className="form-page__cards">
        <FormCardList cards={cards} />
      </section>
    </section>
  );
};

export default FormPage;
