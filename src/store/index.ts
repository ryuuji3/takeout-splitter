import OrderStore from "./OrderStore";
import { createContext } from "react";
import UIStore from "./UIStore";

export class RootStore {
    public orderStore: OrderStore;
    public uiStore: UIStore;

    constructor() {
        this.orderStore = new OrderStore(this);
        this.uiStore = new UIStore(this);
    }
}

const store = new RootStore();

export const StoreContext = createContext(store);

export default store;