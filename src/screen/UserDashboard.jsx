import React from "react";
import LogoutUser from "../components/LogoutUser";
import UsersTable from '../components/UsersTable'


function UserDashboard(props) {
  return (
    <div>
      USUARIO LOGEADO
      <UsersTable {...props} />
      <LogoutUser {...props} />
    </div>
  );
}

export default UserDashboard;
