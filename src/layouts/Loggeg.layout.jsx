import { Suspense, lazy } from 'react';

const NavBar = lazy(() => import("../components/NavBar.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));

const LoggegLayout = ({ children }) => {
    return (
        <Suspense fallback={<Loader/>}>
            <section className='h-screen w-screen bg-gradient-to-bl from-[#ec8800] to-[#fdfd96] overflow-hidden'>
                <NavBar/>
                <main className='px-12'>
                    { children }
                </main>
            </section>
        </Suspense>
    );
}

export default LoggegLayout;
