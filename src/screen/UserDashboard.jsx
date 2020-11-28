import React from 'react'

function UserDashboard(props) {
    return (
        <div>
            USUARIO LOGEADO
            <button onClick={()=>{
                    localStorage.clear('token')
                    props.history.push('/')
            }}>
                Logout
            </button>
        </div>
    )
}

export default UserDashboard
