import React, { Component } from "react";
import logo1 from "../../img/LOGO-BLANCO-SIN-FONDO.png";
import logo2 from "../../img/LOGO-AZUL-SIN-FONDO.png";
import { Route, useHistory, Redirect, Switch } from 'react-router-dom'
import { logout, savePedido, currentUser, sendEmailVerification } from "../../helpers/auth";
import swal from "sweetalert";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
      redirect: null,
      input: {
        email: "",
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        detalle: "",
        fechaRetiro: "",
      },
      errors: {},
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

    if (!input["nombre"]) {
      isValid = false;
      errors["nombre"] = "Por favor ingrese su nombre.";
    }

    if (!input["apellido"]) {
      isValid = false;
      errors["apellido"] = "Por favor ingrese su apellido.";
    }

    if (!input["telefono"]) {
      isValid = false;
      errors["telefono"] = "Por favor ingrese su teléfono.";
    }

    if (!input["direccion"]) {
      isValid = false;
      errors["direccion"] = "Por favor ingrese su dirección.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Por favor verifique su email antes de seguir.";
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

    if (!input["fechaRetiro"]) {
      isValid = false;
      errors["fechaRetiro"] = "Por favor seleccione una fecha de retiro.";
    }

    if (!input["detalle"]) {
      isValid = false;
      errors["detalle"] = "Por favor ingrese las entre calles de su domicilio.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validForm()) {
      savePedido(this.state.input).then((result) => {
        if (result) {
          return swal({
            title: "¡Pedido Agendado!",
            text: "Estamos procesando su pedido, por cualquier cambio nos comunicamos a su email, gracias.",
            icon: "success",
            button: "ACEPTAR",
          });
        } else {
          return swal({
            title: "Error al agendar",
            text: "Por favor verifique su conexión e intente nuevamente, gracias.",
            icon: "error",
            button: "VOLVER",
          });
        }
      });
    }
  };

  componentDidMount() {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser !== "undefined" && loggedInUser !== null) {
      const foundUser = JSON.parse(loggedInUser);

      let input = this.state.input;
      input["email"] = foundUser.email;

      this.setState({
        input,
      });

      if (!currentUser().emailVerified) {
        swal({
          title: "Verificar Email",
          text: "Por favor, antes de seguir verifica tu email desde tu casilla, gracias.",
          icon: "warning",
          buttons: {
            cancel: "CANCELAR",
            verificar: {
              text: "VERIFICAR",
              value: "verificar",
            },
          },
        }).then((value) => {
          if (value==="verificar") {
              sendEmailVerification();
              if(!currentUser().emailVerified){
                swal("Se email no fue verificado aun. Refresque el sitio cuando este realizado").then(() => {
                  logout();
                  this.setState({ redirect: "/" });
                });
              }
          }
        });
      }
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <h3 className="text-center">
                ¡Bienvenido {this.state.input.email}!
              </h3>
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label>Nombre</label>
                        <input
                          className="form-control"
                          onChange={this.handleChange}
                          name="nombre"
                          value={this.state.input.nombre}
                          placeholder="Nombre"
                        />
                        <div className="text-danger">
                          {this.state.errors.nombre}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Apellido</label>
                        <input
                          className="form-control"
                          type="text"
                          name="apellido"
                          value={this.state.input.apellido}
                          onChange={this.handleChange}
                          placeholder="Apellido"
                        />
                        <div className="text-danger">
                          {this.state.errors.apellido}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          name="email"
                          value={this.state.input.email}
                          readOnly
                          placeholder="Email"
                        />
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Fecha Retiro</label>
                        <input
                          type="date"
                          min="Date.now"
                          className="form-control"
                          name="fechaRetiro"
                          value={this.state.input.fechaRetiro}
                          onChange={this.handleChange}
                          placeholder="Fecha Retiro"
                        />
                        <div className="text-danger">
                          {this.state.errors.fechaRetiro}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Teléfono</label>
                        <input
                          className="form-control"
                          value={this.state.input.telefono}
                          onChange={this.handleChange}
                          name="telefono"
                          placeholder="Teléfono"
                        />
                        <div className="text-danger">
                          {this.state.errors.telefono}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Domicilio</label>
                        <input
                          className="form-control"
                          placeholder="Direccion"
                          value={this.state.input.direccion}
                          onChange={this.handleChange}
                          name="direccion"
                        />
                        <div className="text-danger">
                          {this.state.errors.direccion}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Entre calles</label>
                        <input
                          className="form-control"
                          value={this.state.input.detalle}
                          onChange={this.handleChange}
                          name="detalle"
                          placeholder="Entre calles"
                        />
                        <div className="text-danger">
                          {this.state.errors.detalle}
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Enviar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={logout}
                      >
                        Salir
                      </button>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Buscamos tu bolsa llena de reciclados por $350 total!
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Ingresa tu dirección y agenda un día para el retiro.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
