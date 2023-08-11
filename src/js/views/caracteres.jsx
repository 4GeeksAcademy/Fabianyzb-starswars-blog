import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom"

export const Caracteres = () => {
  const { store, actions } = useContext(Context);
  const cards = store.caracteres;

  useEffect(() => {
    actions.getCaracteres();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleFavoritoClick = (caracter) => {
    actions.setFavorito(caracter);
  };

  return (
    <>
      <div className='mt-5'>
      <h2 className="font-weight-light titulo-carrusel ms-4">Personajes</h2>
      <div className="d-flex justify-content-end me-4">
        <a className=' fs-1 arrow-l m-2' onClick={handlePrevClick}><i class="fa-solid fa-arrow-left"></i></a>
        <a className='fs-1 arrow-r m-2' onClick={handleNextClick}><i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="container-fluid py-2 d-flex titulo-info  pe-5">
        {cards.slice(activeIndex, activeIndex + 4).map((card) => (
          <div className="flip-card d-flex m-4" key={card.uid}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img onError={actions.errorImg} src={card.img} alt="Avatar" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
              </div>
              <div className="flip-card-back">
                <h3 className='titulo-card'>{card.name}</h3>
                <p className='first-desc'><strong>Hair-Color:</strong> {card.hair_color}</p>
                <p className='second-desc'><strong>Eye- Color:</strong> {card.eye_color}</p>
                <div className='d-flex justify-content-evenly align-items-end'>
                <Link to={"/people/" + card.uid} className="btn btn-outline-light p-2">leer mas</Link>
                <a className="fs-2 like" onClick={() => handleFavoritoClick(card)}><i class="fa-solid fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

    </>
  );
};
