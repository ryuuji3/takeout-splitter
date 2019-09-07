import OrderStore from "./OrderStore";
import { createContext } from "react";

export class RootStore {
    public orderStore: OrderStore;

    constructor() {
        this.orderStore = new OrderStore(this);
    }
}

const store = new RootStore();

export const StoreContext = createContext(store);

export default store;