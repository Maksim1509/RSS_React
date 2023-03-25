import Form from '../../components/Form/Form';
import React from 'react';
import './FormPage.scss';

const FormPage = () => {
  return (
    <section className="form-page">
      <h2 className="form-page__title">Form</h2>
      <section className="form-page__form">
        <Form />
      </section>
    </section>
  );
};

export default FormPage;
