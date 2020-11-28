import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../redux/actions";

function LoginUser(props) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const refCorreo = React.useRef();
  const refPassword = React.useRef();
  const limpiarDatos = () => {
    setPassword("");
    setCorreo("");
    refCorreo.current.value = "";
    refPassword.current.value = "";
  };
  let data = {
    correo,
    password,
  };
  const login = (e) => {
    e.preventDefault();
    if (!correo || !password) {
      return console.log("no hay datos");
    }
    let url = "http://localhost:4000/api/users/login";
    axios({
      url,
      method: "POST",
      data,
    })
      .then((response) => {
        let roles = response.data.roleName;
        props.loginUser({ type: "LOGIN", data: response.data.token, roles });
        localStorage.setItem("token", response.data.token);
        if (roles && roles === "admin") {
          props.history.push("/admin");
        } else if (roles && roles === "user") {
          props.history.push("/user");
        }
      })

      .catch((err) => {
        console.log(err);
        limpiarDatos();
      });
  };

  return (
    <div>
      <form>
        <label>
          Correo
          <input ref={refCorreo} onChange={(e) => setCorreo(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña
          <input
            ref={refPassword}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <div>
          <button
            onClick={(e) => login(e)}
            disabled={!correo || !password ? true : false}
          >
            Iniciar Sesion
          </button>
          <button onClick={() => limpiarDatos()}>Limpiar Datos</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.index.token,
  roles: state.index.roles,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(login({ type: "LOGIN", data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
