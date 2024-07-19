import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Auth from './pages/Auth';
import Services from './pages/Services';
import Home from './pages/Home';
import Contact from './pages/Contact';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
function App() {
  const router = createBrowserRouter([
    { path: '/' , element: <RootLayout />, errorElement: <Error/>, children: [
      {index: true , element: <Home />},
      {path: 'services', element: <Services />},
      {path: 'contact', element: <Contact />},
      {path: 'auth', element: <Auth />},
    ]}
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
