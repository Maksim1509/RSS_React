import React from 'react';
import './FormCardList.scss';
import { FormData } from '../../types/types';
import FormCard from '../../components/FormCard/FormCard';

const FormCardList = (props: { cards: FormData[] }) => (
  <ul className="form-card-list">
    {props.cards.map((c, i) => (
      <li key={i}>
        <FormCard {...c} />
      </li>
    ))}
  </ul>
);

export default FormCardList;
