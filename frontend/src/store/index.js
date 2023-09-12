import { createStore } from "vuex";
import usersModule from "./modules/users";
import productsModule from "./modules/products";
import orders from "./modules/orders";

export default createStore({
  modules: {
    usermodule: usersModule,
    products: productsModule,
    orders: orders
  },
});
