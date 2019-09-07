import { observable, computed, action } from "mobx";
import Order, { IOrder } from "./models/Order";
import { RootStore } from ".";

export default class OrderStore {
    protected rootStore: RootStore;
    // Observables
    @observable protected _orders: Array<Order> = [];

    public constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        this.add({ name: "Josh", total: 13.99 });
        this.add({ name: "Susie", total: 9.99});
    }

    @action
    add(order: IOrder) {
        this._orders.push(new Order(order));
    }

    @action
    remove(id: string) {
        const found = this._orders.findIndex(order => order.id === id);

        if (found > -1) {
            this._orders.splice(found, 1);
        }
    }

    @computed
    get subtotal(): number {
        return this._orders.reduce((sum, { total }) => sum + total, 0)
    }

    get orders(): Array<Order> {
        return this._orders;
    }
}