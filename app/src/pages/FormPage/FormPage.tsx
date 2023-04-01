import Form, { FormData } from '../../components/Form/Form';
import React, { useState } from 'react';
import './FormPage.scss';
import FormCardList from '../../components/FormCardList/FormCardList';

const FormPage = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  const addCard = (card: FormData) => setCards([...cards, card]);
  return (
    <section className="form-page">
      <h2 className="form-page__title">Form</h2>
      <section className="form-page__form">
        <Form addCard={addCard} />
      </section>
      <section className="form-page__cards">
        <FormCardList cards={cards} />
      </section>
    </section>
  );
};

export default FormPage;
