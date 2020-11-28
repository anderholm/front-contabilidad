import React from "react";
import { Redirect, Route } from "react-router-dom";
import {connect} from 'react-redux'

function Protected({ component: Component, ...rest }) {
  let token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  user: state.index.user,
});

export default connect(mapStateToProps)(Protected);
