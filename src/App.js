
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


import { loader as productsLoader } from "./pages/Products";


import { action as signUpAction } from "./pages/SignUp";
import { action as loginAction } from "./pages/Login";
import { store } from "./store";
import Products from './pages/Products';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import  Cart  from './pages/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction(store),
  },
  {
    path: "/signup",
    element: <SignUp />,
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
