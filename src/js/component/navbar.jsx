import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const [favoritos, setFavoritos] = useState([]);


  useEffect(() => {
      setFavoritos(store.favoritos)
  }, [store.favoritos]);

console.log(store.favoritos)

const deleteItem = (deleteItem)=>{
   actions.deleteFavorito(deleteItem)


}

  return (
    <>
      <nav className="navbar navbar-expand-lg ms-5 me-5 mt-3" style={{background: 'transparent'}}>
        <div className="container-fluid">
          {/* Titulo del Navbar a la izquierda */}
          <Link className="navbar-brand ms-4" to={"/"}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png?20100627124842" alt="" style={{height : '60px', width: '100px'}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5 pe-5" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <i id="heart-fav-list" className="fa-regular fa-heart fs-3 " role="button"
                  data-bs-toggle="dropdown"></i>
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                </a> */}
                <ul className="dropdown-menu" style={{background: 'transparent', width:'80px'}}>
                  {favoritos.map(el => (
                    <li key={el.id} className='d-flex justify-content-between me-4 '>
                      <Link className="text-warning titulo-info" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}to={el.mass ? `/people/${el.uid}` : el.model ? `/vehiculo/${el.uid}` : el.diameter ? `/planets/${el.uid}` : "" }>
                        {el.name}
                      </Link>
                      <a className='arrow' onClick={()=>deleteItem(el)}><i class="fa-solid fa-trash delete"></i></a>
                    </li>
                  ))}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
