import { api } from "./api"

export const getProductList = async () => {
    const productList = await api.get("/");
    console.log(productList.data);
}