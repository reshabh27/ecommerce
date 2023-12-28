
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


import { loader as productsLoader } from "./pages/Products";
import { loader as cartLoader } from './pages/Cart';


import { action as signUpAction } from "./pages/SignUp";
import { action as loginAction } from "./pages/Login";
import { store } from "./store";
import Products from './pages/Products';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import  Cart  from './pages/Cart';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "cart",
        element: <Cart/>,
        loader:cartLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
    action: signUpAction,
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
