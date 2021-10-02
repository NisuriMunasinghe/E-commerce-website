import rootReducer from "../redux/rootReducer";
import store from "../redux/store";
import { api } from "./api"

export const getProductList = () => {
    return api.get("/");
}


//const datalist = (await getProductList()).data;