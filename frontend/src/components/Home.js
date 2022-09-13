import React from "react"
import { useState } from 'react'

import "./Home.css"
const Home = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap Grid</title>
      
    
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="container">
        <div className="row ">

             <div className="card col-md-3 mt-3 ">
  <img
    src="https://imgs.search.brave.com/rto-nw6uB_nUYhKsrYpotW-04ud5RSpmxjIELxWGELQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c3dlYXRiYW5kLmNv/bS93aWxzb25fa2Fv/c19jb21wXzIuMF9s/YWRpZXNfdGVubmlz/X3Nob2VzX3dpbHNv/bl9rYW9zX2NvbXBf/Mi4wX2xhZGllc190/ZW5uaXNfc2hvZXNf/LV9zbGFudF8yMDAw/eDIwMDAuanBn"
    className="card-img-top mt-3 thumbnail"
    alt="Fissure in Sandstone"
  />
  <div className="card-body">
  3.7 <i className="fas fa-star text-warning" />
    <h4 className="card-title">IPad</h4>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Start Designing
    </a>
  </div>
</div>       
          <div className="card col-md-3 mt-3">
  <img
    src="https://imgs.search.brave.com/HPo90HNGqx9kFswFnc4a41JNQihh_HY3q6eZ4qqoQ-I/rs:fit:820:547:1/g:ce/aHR0cHM6Ly9zMS5p/YnRpbWVzLmNvbS9z/aXRlcy93d3cuaWJ0/aW1lcy5jb20vZmls/ZXMvc3R5bGVzL2xn/L3B1YmxpYy8yMDE2/LzExLzI4L3J0c2Jq/M3UuanBn"
    className="card-img-top mt-3 thumbnail"
    alt="Fissure in Sandstone"
  />
  <div className="card-body">
  3.7 <i className="fas fa-star text-warning" />
    <h4 className="card-title">IPad</h4>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Start Designing
    </a>
  </div>
</div>

<div className="card col-md-3 mt-3">
  <img
    src="https://imgs.search.brave.com/HPo90HNGqx9kFswFnc4a41JNQihh_HY3q6eZ4qqoQ-I/rs:fit:820:547:1/g:ce/aHR0cHM6Ly9zMS5p/YnRpbWVzLmNvbS9z/aXRlcy93d3cuaWJ0/aW1lcy5jb20vZmls/ZXMvc3R5bGVzL2xn/L3B1YmxpYy8yMDE2/LzExLzI4L3J0c2Jq/M3UuanBn"
    className="card-img-top mt-3 thumbnail"
    alt="Fissure in Sandstone"
  />
  <div className="card-body ">
  3.7 <i className="fas fa-star text-warning" />
    <h4 className="card-title">IPad</h4>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Start Designing
    </a>
  </div>
</div>

          <div className="card col-md-3 mt-3">
  <img
    src="https://imgs.search.brave.com/HPo90HNGqx9kFswFnc4a41JNQihh_HY3q6eZ4qqoQ-I/rs:fit:820:547:1/g:ce/aHR0cHM6Ly9zMS5p/YnRpbWVzLmNvbS9z/aXRlcy93d3cuaWJ0/aW1lcy5jb20vZmls/ZXMvc3R5bGVzL2xn/L3B1YmxpYy8yMDE2/LzExLzI4L3J0c2Jq/M3UuanBn"
    className="card-img-top mt-3 thumbnail"
    alt="Fissure in Sandstone"
  />
  <div className="card-body">
  3.7 <i className="fas fa-star text-warning" />
    <h4 className="card-title">IPad</h4>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Start Designing
    </a>
  </div>
</div>
          <div className="card col-md-3 mt-3">
  <img
    src="https://imgs.search.brave.com/HPo90HNGqx9kFswFnc4a41JNQihh_HY3q6eZ4qqoQ-I/rs:fit:820:547:1/g:ce/aHR0cHM6Ly9zMS5p/YnRpbWVzLmNvbS9z/aXRlcy93d3cuaWJ0/aW1lcy5jb20vZmls/ZXMvc3R5bGVzL2xn/L3B1YmxpYy8yMDE2/LzExLzI4L3J0c2Jq/M3UuanBn"
    className="card-img-top mt-3 thumbnail"
    alt="Fissure in Sandstone"
  />
  <div className="card-body">
  3.7 <i className="fas fa-star text-warning" />
    <h4 className="card-title">IPad</h4>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="<productDe" className="btn btn-primary">
      Start Designing
    </a>
  </div>
</div>



        </div>
      </div>
      
      
    </>
  );
};
export default Home;
