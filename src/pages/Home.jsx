import { useContext } from 'react';

import { AuthContext } from '../context/Auth.context.jsx';

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            home
        </div>
    );
}

export default Home;
