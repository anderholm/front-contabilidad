import React from "react";
import Protected from "../auth/Protected";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import ModeratorDashboard from './ModeratorDashboard'


function Navigation() {
  return (
    <>
      <Protected path="/admin" component={AdminDashboard} />
      <Protected path="/moderator" component={ModeratorDashboard} />
      <Protected path="/user" component={UserDashboard} />
    </>
  );
}

export default Navigation;
