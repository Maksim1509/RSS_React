import React, { useEffect, useRef, useState } from 'react';
import './FormCard.scss';
import { FormData } from 'components/Form/Form';

const FormCard = ({ name, date, category, condition, file }: FormData) => {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (imageRef.current) imageRef.current.src = result;
    };
    reader.readAsDataURL(file[0]);
  }, []);

  return (
    <section className="form-card">
      <p>{name}</p>
      <p>{date}</p>
      <p>{category}</p>
      <p>{condition}</p>
      <img ref={imageRef} alt="image" />
    </section>
  );
};

export default FormCard;
