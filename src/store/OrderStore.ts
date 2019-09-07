import { observable, computed } from "mobx";
import Order, { IOrder } from "./models/Order";
import RootStore from ".";

export default class OrderStore {
    protected rootStore: RootStore;
    // Observables
    @observable protected orders: Array<Order> = [];

    public constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    add(order: IOrder) {
        this.orders.push(new Order(order));
    }

    remove(id: string) {
        const found = this.orders.findIndex(order => order.id === id);

        if (found > -1) {
            this.orders.splice(found, 1);
        }
    }

    @computed
    get subtotal(): number {
        return this.orders.reduce((sum, { total }) => sum + total, 0)
    }
}