import API from "../api/axios";

export const getAllProducts = async () => {
    const res = await API.get("admin/product");
    return res.data;
}

export const createProduct = async (productData) => {
    const res = await API.post("admin/product", productData);
    return res.data;
}

export const updateProduct = async (id, productData) => {
    const res = await API.put(`admin/product/${id}`, productData);
    return res.data;
}

export const deleteProduct = async (id) => {
    const res = await API.delete(`admin/product/${id}`);
    return res.data;
}



