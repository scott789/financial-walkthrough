import "./App.css";

import Error from "./pages/ErrorPage"
import Data from "./pages/DataPage"
import CardsPage from "./pages/CardsPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardsPage />,
    errorElement: <Error />,
  },
  {
    path: '/data',
    element: <Data />,
    errorElement: <Error />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
