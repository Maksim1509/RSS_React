import React from 'react';
import './FormCard.scss';
import { FormData } from '../../types/types';

const FormCard = ({ name, date, category, condition, file }: FormData) => {
  return (
    <section className="form-card">
      <p>{name}</p>
      <p>{date}</p>
      <p>Category: {category}</p>
      <p>Condition: {condition}</p>
      <img className="form-card__img" src={file} alt="image" />
    </section>
  );
};

export default FormCard;
