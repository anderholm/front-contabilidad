import React from 'react'

function AdminDashboard(props) {
    return (
        <div>
            ADMIN LOGEADO
            <button onClick={()=>{
                    localStorage.clear('token')
                    props.history.push('/')
            }}>
                Logout
            </button>
        </div>
    )
}

export default AdminDashboard
