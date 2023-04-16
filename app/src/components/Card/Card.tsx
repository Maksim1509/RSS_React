import React from 'react';
import { Result } from '../../types/types';
import './style.scss';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchCardData, openModal } from '../../store/modalSlice';

const Card = (props: Result) => {
  const dispatch = useAppDispatch();
  const handeleOpenCardModal = async (id: number) => {
    dispatch(openModal());
    await dispatch(fetchCardData(id));
  };
  return (
    <section className="card" onClick={() => handeleOpenCardModal(props.id)}>
      <img className="card__img" src={props.image} alt="card-image" data-testid="card-img" />
      <h3 className="card__name" data-testid="card-name">
        {props.name}
      </h3>
    </section>
  );
};

export default Card;
