import React, { useState, useEffect } from "react";
import { allUsers, allEmpresas } from "../http/adminRequest";
import { Link } from "react-router-dom";
import Test from "../screen/Test";


const UsersTable = (props) => {
  const { isAdmin, isModerator } = props;
  const [data, setData] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
      // Solicitando todos los usuarios
      allEmpresas(token)
    // allUsers(token)
      .then((result) => {
        // console.log(result)
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
            : "No se han encontrado datos para su solicitud"}
        </table>
      ) : isModerator && data && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              {/* <th>Apellido</th>
              <th>Correo</th>
              <th>id</th> */}
            </tr>
          </thead>
          {data && data.length > 0
            ? data.map((e) => {
                return (
                  <tbody key={e._id}>
                    <tr>
                      <td><Link to={`/empresa/${e._id}`}>{e.nombre}</Link></td>
                      {/* <td>{e.apellido}</td>
                      <td>{e.correo}</td>
                      <td>{e._id}</td> */}
                    </tr>
                  </tbody>
                );
              })
            : "No se han encontrado datos para su solicitud"}
        </table>
      ) : (
        "Cargando lista de usuarios..."
      )}
    </div>
  );
};

export default UsersTable;
