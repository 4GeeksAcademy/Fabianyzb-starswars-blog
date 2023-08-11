import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

export const VehiculoInfo = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [vehiculo, setVehiculo] = useState(null);

  useEffect(() => {
    const data = store.vehiculos.find((vehiculo) => vehiculo.uid === id);
    if (data) {
      setVehiculo(data);
    } else {
      // Si no se encuentra el vehículo, manejar el caso
      setVehiculo(null);
    }
  }, [id, store.vehiculos]);

  if (!vehiculo) {
    return <p>Vehículo no encontrado</p>;
  }

console.log("esto " + store.vehiculos.find((vehiculo) => vehiculo.uid === id))

  return (
    <>
    <Link to={"/"} className="fs-1 arrow-back m-2"><i className="fa-solid fa-arrow-left arrow-back ms-5"></i></Link>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-8">
            <img onError={actions.errorImg} src={vehiculo.img} className="img-fluid" alt="..." style={{borderRadius: '10px'}}/>
          </div>
          <div className="col-4">
            <h1 className="fs-1 titulo-info">{vehiculo.name}</h1>
            
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
       
        <td>Modelo: {vehiculo.model}</td>
        <td>Calse de la Nave: {vehiculo.starship_class}</td>
        <td>Fabricante: {vehiculo.manufacturer}</td>
        <td>Velocidad: {vehiculo.max_atmosphering_speed} KM/h</td>
      </tr>
      <tr>
        
        <td>Precio: {vehiculo.cost_in_credits} <img src="https://static.wikia.nocookie.net/swfanon/images/2/2b/Credits.png/revision/latest/scale-to-width-down/180?cb=20120614171726" alt="" style={{width: '10px', height: '15px' , marginBottom:'5px'}} /></td>
        <td>Pasajeros: {vehiculo.passengers}</td>
        <td>Consumible: {vehiculo.consumables}</td>
      </tr>

    </tbody>
  </table>
</div>
    </>
  );
};
