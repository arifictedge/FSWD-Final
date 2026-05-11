import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

export const createProducts = async (data) => {
    const response = await api.post("/products", data);
    return response.data;
};

export const getAllProducts = async () => {
    const response = await api.get("/products");
    return response.data;
};

export const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
};

export default api;
