import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

export const PersonajeInfo = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [caracter, setCaracter] = useState(null);

  useEffect(() => {
    const data = store.caracteres.find((caracter) => caracter.uid === id);
    if (data) {
      setCaracter(data);
    } else {
      
    setCaracter(null);
    }
  }, [id, store.caracteres]);

  if (!caracter) {
    return <p>caracter no encontrado</p>;
  }
  
  return (
    <>
    <Link to={"/"} className="fs-1 arrow-back m-2"><i className="fa-solid fa-arrow-left arrow-back ms-5"></i></Link>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-8">
            <img onError={actions.errorImg} src={caracter.img} className="img-fluid" alt="..." style={{borderRadius: '10px'}} />
          </div>
          <div className="col-4 ">
            <h1 className="fs-1 titulo-info">{caracter.name}</h1>
            
          </div>
        </div>
      </div>
      <div className="p-5 m-5">
  <table className="table table-bordered border-danger text-light">
    <thead>
      <tr>
        <th colSpan="4" className="text-center">Caracteristicas</th>
      </tr>

    </thead>
    <tbody className="border-danger">
      <tr>
       
        <td>Altura: {caracter.height} cm</td>
        <td>Peso: {caracter.mass} kg</td>
        <td>Color Cabello: {caracter.hair_color}</td>
      </tr>
      <tr>
        
        <td>Color de Piel: {caracter.skin_color}</td>
        <td>Color de Ojos: {caracter.eye_color}</td>
        <td>Nacimiento: {caracter.birth_year}</td>
        <td>Genero: {caracter.gender}</td>
      </tr>

    </tbody>
  </table>
</div>

    </>
  );
};
