import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Popper.js
import App from './App.jsx';
import Error from './pages/Error.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

