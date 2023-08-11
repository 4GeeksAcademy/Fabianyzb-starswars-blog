import React, { useState, useContext, useEffect,  } from 'react';
import { useParams, Link } from "react-router-dom"
import { Context } from '../store/appContext';
import {Caracteres} from '../views/caracteres.jsx'
import {Planetas} from '../views/planetas.jsx'
import { Vehiculos  } from '../views/vehiculos.jsx'


export const Home = () =>{
    const { store } = useContext(Context);
    const [favoritos, setFavoritos] = useState(store.favoritos);

    useEffect(() => {
      setFavoritos(store.favoritos);
    }, [favoritos]);


    return (
        <>
        <Caracteres></Caracteres>
        <Planetas></Planetas>
        <Vehiculos></Vehiculos>
        </>

    )
} 