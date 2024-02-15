import React, { Component } from "react";
import { login, resetPassword } from "../helpers/auth";
import "../components/stars.scss";
import { Link } from "react-router-dom";
import logo1 from "../img/LOGO-BLANCO-SIN-FONDO.png";
import logo2 from "../img/LOGO-AZUL-SIN-FONDO.png";
import swal from "sweetalert";

function setErrorMsg(error) {
  return {
    loginMessage: error,
  };
}

export default class Login extends Component {
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

  validForm() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Por favor verifique su contraseña.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Por favor ingrese su email.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Por favor ingrese un email válido.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validForm()) {
      login(this.state.input.email, this.state.input.password)
        .then((response) => {
          
          var user = {
            email: response.user.email,
            uid: response.user.uid,
            emailVerified: response.user.emailVerified,
          };

          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((error) => {
          if(error.message.includes("The password is invalid")){
            swal({
              title: "Error al ingresar",
              text: "Verifique su contraseña",
              icon: "warning",
              button: "ACEPTAR",
            });
          }
          
          if(error.message.includes("Access to this account has been temporarily disabled")){
            swal({
              title: "Error al ingresar",
              text: "Verifique su usuario",
              icon: "error",
              button: "ACEPTAR",
            });
          }

          if(error.message.includes("There is no user record corresponding to this identifier")){
          swal({
            title: "Error al ingresar",
            text: "Verifique su usuario",
            icon: "error",
            button: "ACEPTAR",
          });
        }
        });
    }
  };

  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)));
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
                    {/* <h3 className="text-center heading">Cyclear - Envios</h3> */}
                    {/* <h6 className="msg-info">Please login to your account</h6> */}
                    <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        Email
                      </label>
                      <input
                        className="form-control"
                        // ref={(email) => (this.state.input.email = email)}
                        onChange={this.handleChange}
                        name="email"
                        placeholder="Email"
                      />
                      <div className="text-danger">
                        {this.state.errors.email}
                      </div>
                    </div>
                    <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                        // ref={(pw) => (this.state.input.password = pw)}
                      />
                      <div className="text-danger">
                        {this.state.errors.password}
                      </div>
                    </div>
                    <div className="row justify-content-center px-3">
                      {" "}
                      <button type="submit" className="btn-block btn-color">
                        INGRESAR
                      </button>{" "}
                    </div>
                    <div className="row justify-content-center">
                      {" "}
                      <a href="#">
                        <small className="text-muted">
                          Olvide mi contraseña?
                        </small>
                      </a>{" "}
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-center mb-4">
                <p href="#" className="sm-text mx-auto mb-2">
                  No tengo cuenta?
                  <Link to="/registro" className="btn btn-white ml-2">
                    Crear cuenta
                  </Link>
                  {/* <button className="btn btn-white ml-2" onClick={this.resetPassword}>Crear cuenta</button> */}
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right">
                <h3 className="text-white">Cyclear trabaja con Beep</h3>{" "}
                <small className="text-white">
                  En conjunto podemos llegar mas lejos y mejorar nuestro
                  servicio De esta forma podran acceder mas facil a todos los
                  productos Cyclear y a nuestra comunidad. ¡Agradecemos a todos
                  aquellos que apuesten por el cambio!
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    {
      /* 
      <section>
        <div className="col-sm-6 col-sm-offset-3">
          <h1> Login </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                ref={(email) => (this.email = email)}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={(pw) => (this.pw = pw)}
              />
            </div>
            {this.state.loginMessage && (
              <div className="alert alert-danger" role="alert">
                <span
                  className="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.loginMessage}{" "}
                <a href="#" onClick={this.resetPassword} className="alert-link">
                  Forgot Password?
                </a>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </section> */
    }
  }
}
