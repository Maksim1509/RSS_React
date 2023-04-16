import React, { useEffect, useRef } from 'react';
import './FormCard.scss';
import { FormData } from '../../types/types';

const FormCard = ({ name, date, category, condition, file }: FormData) => {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (imageRef.current) imageRef.current.src = result;
    };
    reader.readAsDataURL(file[0]);
  }, [file]);

  return (
    <section className="form-card">
      <p>{name}</p>
      <p>{date}</p>
      <p>Category: {category}</p>
      <p>Condition: {condition}</p>
      <img className="form-card__img" ref={imageRef} alt="image" />
    </section>
  );
};

export default FormCard;
