import { observable, computed, action, runInAction } from "mobx";
import Order, { IOrder } from "./models/Order";
import { RootStore } from ".";

export default class OrderStore {
    protected rootStore: RootStore;
    // Observables
    @observable protected _orders: Array<Order> = [];
    @observable protected _tax!: number;
    @observable protected _delivery!: number;
    @observable protected _tip!: number;

    public constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        this.tax = 13;
        this.delivery = 5;
        this.tip = 15;

        this.add({ name: "Josh", total: 13.99 });
        this.add({ name: "Susie", total: 9.99});
    }

    @action.bound
    add(order: IOrder) {
        this._orders.push(new Order(order));
    }

    @action.bound
    remove(id: string) {
        const found = this._orders.findIndex(order => order.id === id);

        if (found > -1) {
            this._orders.splice(found, 1);
        }
    }

    @computed
    get subtotal(): number {
        return this._orders.reduce((sum, { total }) => sum + total, 0);
    }

    get deliveryTotal(): number {
        if (this._orders.length) {
            return this.delivery;
        }

        return 0.0;
    }

    @computed
    get taxTotal(): number {
        return this.orders.reduce((total, { total: subtotal }) => total + (subtotal + this.deliveryPerOrder) * this.tax / 100, 0);
    }

    @computed
    get tipTotal(): number {
        return this.orders.reduce((total, order) => total + this.calculateTipForOrder(order), 0);
    }

    @computed
    get total(): number {
        return this.orders.reduce((total, order) => total + this.calculateTotalForOrder(order) , 0);
    }

    @computed
    get deliveryPerOrder(): number {
        if (this.orders.length) {
            return this.delivery / this.orders.length;
        }
        
        return 0;
    }

    private calculateTotalForOrder(order: Order) {
        const { total: subtotal } = order;

        return (subtotal + this.deliveryPerOrder) * (1 + (this.tax / 100)) + this.calculateTipForOrder(order);
    }

    private calculateTipForOrder({ total }: Order) {
        return (total * this.tip / 100);
    }

    calculateTotal = (id: string): number => {
        const found = this.orders.find(order => order.id === id);

        if (found) {
            return this.calculateTotalForOrder(found);
        }

        return 0.0;
    }

    calculateTip = (id: string): number => {
        const found = this.orders.find(order => order.id === id);

        if (found) {
            return this.calculateTipForOrder(found);
        }

        return 0.0;
    }

    get orders(): Array<Order> {
        return this._orders;
    }

    get tax(): number {
        return this._tax;
    }

    set tax(tax: number) {
        runInAction(() => {
            this._tax = tax;
        })
    }

    get delivery(): number {
        return this._delivery;
    }

    set delivery(delivery: number) {
        runInAction(() => {
            this._delivery = delivery;
        })
    }

    get tip(): number {
        return this._tip;
    }

    set tip(tip: number) {
        runInAction(() => {
            this._tip = tip;
        })
    }
}