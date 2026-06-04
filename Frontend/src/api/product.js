import API from "./axios";

export const getPublicProducts = async () => {
    const res = await API.get("/product");
    return res.data;
}
