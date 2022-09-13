import React from 'react';
import {Formik} from 'formik';
import Swal from"sweetalert2";
const Register = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    //1.url
    //2.request method
    //3.data
    //4.data format
    //asynchronous function -returns promise 

   const response =await fetch("http://localhost:5000/user/add",{
        method:"POST",
        body:JSON.stringify(formdata),
        headers:{
            "Content-Type":"application/json"
        }
    })
    if (response.status===200){
        console.log("user data added ");
        Swal.fire({
            icon:"success",
            title:"well done",
            text:"Registered Successfully "
        })
    }
    console.log("request sent ");



}

    return(
      <>
      
      
      <section className="vh-100" style={{background:("../Image/a1.jpg")}}>
  <div className="container h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Registration Form
                </p>
                <Formik
                        initialValues={{username: '', email: '', password: '',repeatpassword:""}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (



                <form  onSubmit={handleSubmit} className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="username" onChange={handleChange} value={values.username} 
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email" onChange={handleChange} value={values.email} 
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="password" onChange={handleChange} value={values.password}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="repeatpassword" onChange={handleChange} value={values.repeatpassword}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat password
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
                )}
                </Formik>


              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
    
    )
}
export default Register;