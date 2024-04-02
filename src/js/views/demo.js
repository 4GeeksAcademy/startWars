import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCaracteristicas(id);
  }, []);

  console.log(store);

  return (
    <div className="container">
      <h4 className="text-center mt-5">{store.personaje.name}</h4>

      <div className="card mb-3" style={{ maxwidth: "540px" }}>
        <div className="row ">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="mi padre..." />
          </div>
          <div className="col">
            <div className="card-body">
              <p>
                <strong>Birthyear:</strong> {store.personaje.birth_year}{" "}
              </p>
              <p>
                {" "}
                <strong>Eye color:</strong> {store.personaje.eye_color}{" "}
              </p>
              <p>
                {" "}
                <strong>Hair color:</strong> {store.personaje.hair_color}{" "}
              </p>
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
};
