import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";
import { Context } from "../store/appContext";
import imagenes from "../component/imagenpersonajes.jsx";
import imagenesPlanets from "../component/imagenplanetas.jsx";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPersonajes();
    actions.getPlanetas();
  }, []);
  console.log(store.favorites);
  return (
    <div>
     
      <h1
        style={{ display: "flex", justifyContent: "center", color: "yellow" }}
      >
        Characters
      </h1>

      <br />
      <div className="container">
        <div className="row flex-row flex-nowrap overflow-auto">
          {store.personajes.map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ marginBottom: "20px" }}
            >
              <Characters
                title={item.name}
                image={imagenes[index % imagenes.length]} // el % es para que no se pase del tamaño del array
                id={item.uid}
              />
            </div>
          ))}
        </div>
        


        <h1
          style={{ display: "flex", justifyContent: "center", color: "yellow" }}
        >
          Planets
        </h1>
        <br />
        <div className="row flex-row flex-nowrap overflow-auto">
          {store.planetas.map((planet, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ marginBottom: "20px" }}
            >
              <Planets
                title={planet.name}
                image={imagenesPlanets[index % imagenesPlanets.length]}
                id={planet.uid}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
