import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCaracteristicasPlanetas(id);
  }, []);

  return (
    
    
      <div className="container">
        <h4 className="text-center mt-5" style={{ color: "yellow" }}>
          {store.planetasId.name}
        </h4>

        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row ">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                className="img-fluid rounded-start"
                alt="planeta..."
              />
            </div>
            <div className="col">
              <div className="card-body">
                <p>
                  <strong>Climate: </strong> {store.planetasId.climate}
                </p>
                <p>
                  {" "}
                  <strong>Diameter:</strong> {store.planetasId.diameter}
                </p>
                <p>
                  {" "}
                  <strong>Terrain:</strong> {store.planetasId.terrain}
                </p>
                <p>
                {" "}
                  <strong>Population:</strong> {store.planetasId.population}
                </p>
             
                <p><strong>Orbital Period:</strong> {store.planetasId.orbital_period}</p>
                {" "}
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ marginRight: "60px", padding: "30px" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    );
  
}