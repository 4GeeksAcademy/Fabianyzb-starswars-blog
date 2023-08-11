import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

export const PlanetaInfo = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [planeta, setPlaneta] = useState(null);

  useEffect(() => {
    const data = store.planets.find((planeta) => planeta.uid === id);
    if (data) {
      setPlaneta(data);
    } else {
      
      setPlaneta(null);
    }
  }, [id, store.planets]);

  if (!planeta) {
    return <p>Planeta no encontrado</p>;
  }
  
  return (
    <>
    <Link to={"/"} className="fs-1 arrow-back m-2"><i className="fa-solid fa-arrow-left arrow-back ms-5"></i></Link>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-8">
            <img onError={actions.errorImg} src={planeta.img} className="img-fluid ms-4" alt="..." style={{borderRadius: '10px'}}/>
          </div>
          <div className="col-4 ">
            <h1 className="fs-1 titulo-info">{planeta.name}</h1>
            
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
       
        <td>Periodo de Rotacion: {planeta.rotation_period}</td>
        <td>Periodo Orbitacional: {planeta.orbital_period}</td>
        <td>Diametro: {planeta.diameter}</td>
      </tr>
      <tr>
        
        <td>Poblacion: {planeta.population}</td>
        <td>Terreno: {planeta.terrain}</td>
        <td>Superficie: {planeta.surface_water}</td>
      </tr>

    </tbody>
  </table>
</div>

    </>
  );
};
