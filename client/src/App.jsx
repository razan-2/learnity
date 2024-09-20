import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Home } from './pages/Home/Home';

function App() {
  const Layout = () => {
    return (
      <>
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )
  }
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
      ]
    },
  ]);

  return element;
}

export default App
