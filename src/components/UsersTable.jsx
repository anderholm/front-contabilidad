import React, { useState, useEffect } from "react";
import { allUsers } from "../http/adminRequest";

const UsersTable = (props) => {
  const { isAdmin, isModerator } = props;
  const [data, setData] = useState();
//   let token = localStorage.getItem("token");
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjFhMzE1NGY4MWNmMzM4NGQyODIxOSIsInJvbGVzIjpbIjVmYjE1YTFkYmNlYzI1MjI4OGZiZDRhNCJdLCJpYXQiOjE2MDY2OTUwMzYsImV4cCI6MTYwNjc4MTQzNn0.jK_u9P_9IaUPSNIxkO98yM7F5b9Mb3fmj0rktZOUq38";

  useEffect(() => {
      // Solicitando todos los usuarios
    allUsers(token)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div>
      {isAdmin && data && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
            </tr>
          </thead>
          {data && data.length > 0
            ? data.map((e) => {
                return (
                  <tbody key={e._id}>
                    <tr>
                      <td>{e.nombre}</td>
                      <td>{e.apellido}</td>
                      <td>{e.correo}</td>
                    </tr>
                  </tbody>
                );
              })
            : null}
        </table>
      ) : isModerator && data && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>id</th>
            </tr>
          </thead>
          {data && data.length > 0
            ? data.map((e) => {
                return (
                  <tbody key={e._id}>
                    <tr>
                      <td>{e.nombre}</td>
                      <td>{e.apellido}</td>
                      <td>{e.correo}</td>
                      <td>{e._id}</td>
                    </tr>
                  </tbody>
                );
              })
            : null}
        </table>
      ) : (
        "Cargando lista de usuarios..."
      )}
    </div>
  );
};

export default UsersTable;
