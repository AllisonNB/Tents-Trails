import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Routes/RootLayout';
import ErrorPage from './Routes/ErrorPage';
import Homepage from './Routes/Homepage';
import CampRootLayout from './Routes/CampRootLayout';
import AllCampgrounds, { loader as campgroundsLoader } from './Routes/AllCampgrounds';
import CampDetails, { loader as campsiteDetailsLoader } from './Routes/CampDetails';
import { action as campAction } from '../src/Components/CampForm';
import NewCamp from './Routes/NewCamp';
import EditCamp from './Routes/EditCamp';
import Login from './Routes/Login';





const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'campgrounds',
        element: <CampRootLayout />,
        children: [
          {
            index: true,
            element: <AllCampgrounds />,
            loader: campgroundsLoader,
          },
          {
            path: 'new',
            element: <NewCamp />,
            action: campAction,
          },
          {
            path: ':campid',
            loader: campsiteDetailsLoader,
            id: 'campDetails',
            children: [
              {
                index: true,
                element: <CampDetails />,
              },
              {
                path: 'edit',
                element: <EditCamp />,
                action: campAction,
              },
            ],
          },
        ]
      },
      {
        path: 'login',
        element: <Login />
      },
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
