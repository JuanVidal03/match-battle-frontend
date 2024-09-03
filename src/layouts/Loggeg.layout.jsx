import { Suspense, lazy } from 'react';

const NavBar = lazy(() => import("../components/NavBar.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));

const LoggegLayout = ({ children }) => {
    return (
        <Suspense fallback={<Loader/>}>
            <section className='h-screen flex flex-col w-screen bg-gradient-to-bl from-[#ec8800] to-[#fdfd96] overflow-y-scroll'>
                <NavBar/>
                <main className='px-12 flex-1'>
                    { children }
                </main>
                <footer className='p-5'>
                    <p className='text-center'>© 2024 · Creado por <a className='font-extrabold' target='_blank' href="https://www.instagram.com/juanvidal_03/">Juan Vidal</a></p>
                </footer>
            </section>
        </Suspense>
    );
}

export default LoggegLayout;
