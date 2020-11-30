export const login = (data) => ({
  type: "LOGIN",
  token: data.data.data,
  roles: data.data.roles,
});
export const logout = (data) => ({
  type: "LOGOUT",
  token: data.data.data,
  roles: data.data.data,
});
