import React, { useEffect, useState } from 'react';
import { useRoutes, Outlet, useLocation } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { About } from './pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Blog } from './pages/Blog/Blog';
import Playground from './pages/Playground/Playground';
import Guided from './pages/Guided/Guided';
import Doneaza from './pages/Doneaza/Doneaza';
import EducationUnplugged from './pages/EducationUnplugged/EducationUnplugged';
import Post from './pages/Post/Post';
import { AuthContextProvider, useAuth } from './context/Auth/Auth';
import LoginSignup from './pages/Account/LogIn&SignUp';
import YourAccount from './pages/Account/YourAccount';
import Calendar from './pages/Calendar/Calendar';
import { EventsContextProvider } from './context/Events/EventsContext';
import Participate from './pages/Calendar/Participate';
import AddEvent from './pages/Calendar/AddEvent';
import AnythingElse from './pages/AnythingElse/AnythingElse';

const Layout = (location) => {
  return (
    <>
      <NavBar currentPage={location} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const getLocation = useLocation();
  const [location, setLocation] = useState();

  useEffect(() => {
    setLocation(getLocation.pathname);
    console.log("User is on page: ", getLocation.pathname)
  }, [getLocation])

  const element = useRoutes([
    {
      path: '/',
      element: <Layout location={location} />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: './blog',
          element: <Blog />
        },
        {
          path: '/about-us',
          element: <About />
        },
        {
          path: '/playground',
          element: <Playground />
        },
        {
          path: '/guided-learning',
          element: <Guided />
        },
        {
          path: '/doneaza',
          element: <Doneaza />
        },
        {
          path: '/education-unplugged',
          element: <EducationUnplugged />
        },
        {
          path: '/education-unplugged/:id',
          element: <Post />
        },
        {
          path: '/log-in',
          element: <LoginSignup />
        },
        {
          path: '/account',
          element: <YourAccount />
        },
        {
          path: '/upcoming-events',
          element: <Calendar />
        },
        {
          path: '/upcoming-events/:id',
          element: <Participate />
        },
        {
          path: '/add-event',
          element: <AddEvent />
        },
        {
          path: '/anything-else/:id',
          element: <AnythingElse />
        },
        {
          path: '/blog',
          element: <h1>blog</h1>
        },
        {
          path: '*',
          element: <NotFound />
        },
      ]
    },
  ]);

  return (
      <AuthContextProvider>
        <EventsContextProvider>
          <div>{element}</div>
        </EventsContextProvider>
      </AuthContextProvider>
  );
}

export default App
