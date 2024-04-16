import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.css";
import { SharedLayout, ProtectedRoute } from "./RoutingElements";
import Loading from "./components/Loading";
const Error404 = lazy(() => import("./pages/website/Error404"));
const Register = lazy(() => import("./pages/website/Register"));
const Login = lazy(() => import("./pages/website/Login"));
const Categories = lazy(() => import("./pages/website/Categories"));
const ProductsAll = lazy(() => import("./pages/website/ProductsAll"));
const ProductDetails = lazy(() => import("./pages/website/ProductDetails"));
const Cart = lazy(() => import("./pages/website/Cart"));
const HomePage = lazy(() => import("./pages/website/HomePage"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          {/* Error 404 page */}
          <Route path="*" element={<Error404 />} />
          {/* website pages */}
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="/products/all" element={<ProductsAll />} />
            <Route path="products/:id" element={<ProductDetails />} />
            {/* protected routes */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
