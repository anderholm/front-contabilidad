import React from "react";
import LogoutUser from "../components/LogoutUser";
import UsersTable from '../components/UsersTable'


function UserDashboard(props) {
  return (
    <div>
      MODERADOR LOGEADO
      <UsersTable {...props} isModerator={true} />
      <LogoutUser {...props} />
    </div>
  );
}

export default UserDashboard;
