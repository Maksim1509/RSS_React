import React from 'react';
import './ModalCard.scss';
import { Result } from 'types/types';

const ModalCard = (props: Result) => {
  const renderLocation = () => (
    <>
      <div>
        Location: <b>{props.locationResponse?.name}</b>
      </div>
      <div>
        Type: <b>{props.locationResponse?.type}</b>
      </div>
      <div>
        Dimension: <b>{props.locationResponse?.dimension}</b>
      </div>
      <div></div>
    </>
  );
  return (
    <section
      className="modal-card"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img
        className="modal-card__img"
        src={props.image}
        alt="card-image"
        data-testid="modal-card-img"
      />
      <h3 className="modal-card__name" data-testid="modal-card-name">
        {props.name}
      </h3>
      <div>
        Status: <b>{props.status}</b>
      </div>
      <div>
        Species: <b>{props.species}</b>
      </div>
      <div>
        Gender: <b>{props.gender}</b>
      </div>
      <div>
        Created: <b>{props.created.slice(0, -8)}</b>
      </div>
      {props.locationResponse ? renderLocation() : 'Loading...'}
    </section>
  );
};

export default ModalCard;
