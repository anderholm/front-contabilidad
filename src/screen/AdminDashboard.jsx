import React from 'react'
import LogoutUser from '../components/LogoutUser'
import UsersTable from '../components/UsersTable'

function AdminDashboard(props) {
    return (
        <div>
            ADMIN LOGEADO
            <UsersTable {...props} isAdmin={true} />
            <LogoutUser {...props} />
        </div>
    )
}

export default AdminDashboard
