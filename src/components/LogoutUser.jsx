import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

function LogoutUser(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.logoutUser({ type: "LOGOUT", data:null });
          localStorage.clear("token");
          props.history.push("/");
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (data) => dispatch(logout({ type: "LOGOUT", data })),
});

export default connect(null, mapDispatchToProps)(LogoutUser);
