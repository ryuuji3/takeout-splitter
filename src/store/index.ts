import UIStore from "./UIStore";
import OrderStore from "./OrderStore";

export default class RootStore {
    protected uiStore: UIStore;
    protected orderStore: OrderStore;

    constructor() {
        this.uiStore = new UIStore(this);
        this.orderStore = new OrderStore(this);
    }
}