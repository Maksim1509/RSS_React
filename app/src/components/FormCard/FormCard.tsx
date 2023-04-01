import React from 'react';
import './FormCard.scss';
import { FormData } from 'components/Form/Form';

const FormCard = ({ name, date, category, condition }: FormData) => (
  <section className="form-card">
    <p>{name}</p>
    <p>{date}</p>
    <p>{category}</p>
    <p>{condition}</p>
  </section>
);

export default FormCard;
