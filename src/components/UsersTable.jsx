import { Suspense, lazy, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

const UserTableRow = lazy(() => import("../components/UserTableRow.jsx"));
const UserTableRowSkeleton = lazy(() => import("../components/UserTableRowSkeleton.jsx"));

import { getAllUsers } from '../services/user.services';

import { GlobalContext } from '../context/Global.context.jsx';

const UsersTable = () => {

    const { users, loading } = useContext(GlobalContext);    

    return (
        <Suspense>
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
        </Suspense>
    );
}

export default UsersTable;
