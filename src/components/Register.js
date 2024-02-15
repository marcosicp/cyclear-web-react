import React, { Component } from "react";
import { auth } from "../helpers/auth";
import logo1 from "../img/LOGO-BLANCO-SIN-FONDO.png";
import logo2 from "../img/LOGO-AZUL-SIN-FONDO.png";

function setErrorMsg(error) {
  return {
    registerError: error.message,
  };
}

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
      loginMessage: null,
      errors: {},
      input: {
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    auth(this.state.input.email, this.state.input.password)
    .then((response) => {

      response.user.sendEmailVerification();
      var user = {
            email: response.user.email,
            uid: response.user.uid,
            emailVerified: response.user.emailVerified,
          };

          localStorage.setItem("user", JSON.stringify(user));

    })
    .catch((e) =>
      this.setState(setErrorMsg(e))
    );
  };
  render() {
    return (
      <div className="container px-4 py-5 mx-auto">
        <div className="card card0">
          <div className="d-flex flex-md-row flex-column-reverse">
            <div className="card card1">
              <div className="row justify-content-center">
                <div className="col-md-8 col-10">
                  <div className="row justify-content-center px-3 mb-3">
                    <img id="logo" src={logo2} />{" "}
                  </div>
                  <form onSubmit={this.handleSubmit}>
                  <h3 className="text-center heading">Registro Nuevo Reciclador</h3>
                  {/* <h6 className="msg-info">Please login to your account</h6> */}
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Username
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Ingrese su email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      name="password"
                      placeholder="Contraseña"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Repetir Contraseña
                    </label>
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      onChange={this.handleChange}
                      placeholder="Repetir Contraseña"
                      className="form-control"
                    />
                  </div>
                  <div className="row justify-content-center px-3">
                    {" "}
                    <button className="btn-block btn-color">
                      REGISTRARME
                    </button>{" "}
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right">
                <h3 className="text-white">Cyclear trabaja con Beep</h3>{" "}
                <small className="text-white">
                  ¡Sumate a reciclar responsablemente con Cyclear!
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    //   <div className="col-sm-6 col-sm-offset-3">
    //     <h1>Register</h1>
    //     <form onSubmit={this.handleSubmit}>
    //       <div className="form-group">
    //         <label>Email</label>
    //         <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
    //       </div>
    //       <div className="form-group">
    //         <label>Password</label>
    //         <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
    //       </div>
    //       {
    //         this.state.registerError &&
    //         <div className="alert alert-danger" role="alert">
    //           <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
    //           <span className="sr-only">Error:</span>
    //           &nbsp;{this.state.registerError}
    //         </div>
    //       }
    //       <button type="submit" className="btn btn-primary">Register</button>
    //     </form>
    //   </div>
    // )
  }
}
