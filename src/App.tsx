import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Verification from './pages/Verification';
import LayoutUI from './ui/LayoutUI';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import store from './store';
import Upload from './pages/Upload';
import LostPassword from './pages/LostPassword';
import Profile from './pages/Profile';

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
        path: '/lost-password',
        element: <LostPassword />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/verify',
        element: <Verification />,
      },
      {
        path: '/upload',
        element: <Upload />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
