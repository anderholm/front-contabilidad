import React from "react";

import LoginUser from '../components/LoginUser'

function HomeLogin(props) {


  // correo: "admin@test.com",
  // correo: "usuario@test.com"",
  // password: "password",


  return (
    <div>
      Funcionando
      <LoginUser {...props}/>
    </div>
  );
}

export default HomeLogin;
