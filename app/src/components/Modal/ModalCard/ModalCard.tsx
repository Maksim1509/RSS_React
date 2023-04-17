import React from 'react';
import './ModalCard.scss';
import { useAppSelector } from '../../../hooks/hooks';

const ModalCard = () => {
  const { cardData, isLoading, error } = useAppSelector((state) => state.modal);
  const renderLocation = () => (
    <>
      <div>
        Location: <b>{cardData?.locationResponse?.name}</b>
      </div>
      <div>
        Type: <b>{cardData?.locationResponse?.type}</b>
      </div>
      <div>
        Dimension: <b>{cardData?.locationResponse?.dimension}</b>
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
      {isLoading && <div className="modal-card__loading">LOADING...</div>}
      {error && <div>{error}</div>}
      {cardData && (
        <>
          <img
            className="modal-card__img"
            src={cardData.image}
            alt="card-image"
            data-testid="modal-card-img"
          />
          <h3 className="modal-card__name" data-testid="modal-card-name">
            {cardData?.name}
          </h3>
          <div>
            Status: <b>{cardData.status}</b>
          </div>
          <div>
            Species: <b>{cardData.species}</b>
          </div>
          <div>
            Gender: <b>{cardData.gender}</b>
          </div>
          <div>
            Created: <b>{cardData.created.slice(0, -8)}</b>
          </div>
          {renderLocation()}
        </>
      )}
    </section>
  );
};

export default ModalCard;
