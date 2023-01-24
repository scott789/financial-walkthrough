import "./App.css";

import ErrorPage from "./pages/ErrorPage"
import DataPage from "./pages/DataPage"
import CardsPage from "./pages/CardsPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/data',
    element: <DataPage />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
