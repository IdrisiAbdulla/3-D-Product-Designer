import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <>
    <div className="bg bg-info">
    
      <div className="container">
        <div className="row ">
          <div className="col-md-3 mt-3">
            <div className="card">
              <img
                src="models/jumbo.jpg"
                className="card-img-top mt-3 thumbnail"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                3.7 <i className="fas fa-star text-warning" />
                <h4 className="card-title">Shoe</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary- ">
                   <a href="/ProductCustomizer">Start Designing</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <img
                src="models/headphones.png"
                className="card-img-top mt-3 thumbnail"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                3.7 <i className="fas fa-star text-warning" />
                <h4 className="card-title">Cricket </h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary- ">
                <a href="/ProductCustomizer">Start Designing</a>
                </button>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mt-3">
            <div className="card">
              <img
                src="models/globe.png"
                className="card-img-top mt-3 thumbnail"
                alt="Fissure in Sandstone"
              />
              <div className="card-body ">
                3.7 <i className="fas fa-star text-warning" />
                <h4 className="card-title">Globe</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary- ">
                <a href="/ProductCustomizer">Start Designing</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <img
                src="models/watch.png"
                className="card-img-top mt-3 thumbnail"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                3.7 <i className="fas fa-star text-warning" />
                <h4 className="card-title">Watch</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary- ">
                    
                 <a href="/ProductCustomizer">Start Designing</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;
