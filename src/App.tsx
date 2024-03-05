import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Verification from './pages/Verification';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/verify',
        element: <Verification />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
