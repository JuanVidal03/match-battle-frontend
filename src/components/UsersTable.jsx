import { Suspense, lazy, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UserTableRow = lazy(() => import("../components/UserTableRow.jsx"));
const UserTableRowSkeleton = lazy(() => import("../components/UserTableRowSkeleton.jsx"));

import { getAllUsers } from '../services/user.services.js';

const UsersTable = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const fetchUsers = async() => {
            try {
                
                const allUsers = await getAllUsers();
                setUsers(allUsers.data.data);
                setLoading(false);

            } catch (error) {
                toast.error(`Error al obtener los usuarios. ${error.message}`);
                setLoading(false);
            }
        }
        fetchUsers();

    }, []);


    return (
        <div className="overflow-x-auto  rounded-2xl">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Correo Eléctronico</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <UserTableRowSkeleton/>
                        ) : (
                            users?.map(user => (
                                <UserTableRow
                                    key={user._id}
                                    user={user}
                                />
                            ))
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Correo Eléctronico</th>
                        <th>Estado</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default UsersTable;
