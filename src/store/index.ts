import UIStore from "./UIStore";
import OrderStore from "./OrderStore";
import { createContext } from "react";

export class RootStore {
    public uiStore: UIStore;
    public orderStore: OrderStore;

    constructor() {
        this.uiStore = new UIStore(this);
        this.orderStore = new OrderStore(this);
    }
}

const store = new RootStore();

export const StoreContext = createContext(store);

export default store;