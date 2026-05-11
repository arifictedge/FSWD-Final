import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <AllProducts />,
            },
            {
                path: "/add-product",
                element: <AddProduct />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
        ],
    },
]);

export default router;
