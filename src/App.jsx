import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Loader as detailsLoader } from "./pages/ProductDetails";

const SharedLayout = lazy(() => import("./components/SharedLayout"));
const Error404 = lazy(() => import("./pages/Error404"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Categories = lazy(() => import("./pages/Categories"));
const ProductsAll = lazy(() => import("./pages/ProductsAll"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Loading = lazy(() => import("./components/Loading"));

import "react-lazy-load-image-component/src/effects/blur.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/categories/:id",
        element: <Categories />,
      },
      {
        path: "/products/bycategory",
        element: <ProductsAll />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: detailsLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
