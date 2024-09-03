import { Suspense, lazy } from 'react';

const LoggegLayout = lazy(() => import("../layouts/Loggeg.layout.jsx"));
const UsersTable = lazy(() => import("../components/UsersTable.jsx"));

const Users = () => {

    document.title = "Usuarios | Match Battle";

    return (
        <Suspense>
            <LoggegLayout>
                <h1 className='font-extrabold text-3xl mb-12 uppercase'>Usuarios registrados</h1>
                <UsersTable/>
            </LoggegLayout>
        </Suspense>
    );
}

export default Users;
