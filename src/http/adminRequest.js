import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const allUsers = (token) => {
  let request = axios
    .get("users/", { headers: { "x-access-token": token } })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return request;
};

export const allEmpresas = (token) => {
  let request = axios
    .get("empresas/", { headers: { "x-access-token": token } })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
    return request
};
