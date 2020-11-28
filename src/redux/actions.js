
export const login =(data)=>({
    type:'LOGIN',
    token: data.data.data,
    roles: data.data.roles
})
