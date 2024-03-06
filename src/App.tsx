import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Verification from './pages/Verification';
// import { Footer } from 'antd/es/layout/layout';
import LayoutUI from './ui/LayoutUI';

const router = createBrowserRouter([
  {
    element: <LayoutUI />,
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
