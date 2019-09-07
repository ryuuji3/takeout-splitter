import { observable, action } from "mobx";
import UUID from "uuid-js";

export default class Order {
    @observable protected _id!: string;
    @observable protected _name!: string;
    @observable protected _total!: number;

    constructor(order: IOrder) {
        this._id = UUID.create(4).toString();
        this.name = order.name;
        this.total = order.total;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    @action
    set name(name: string) {
        this._name = name;
    }

    get total(): number {
        return this._total;
    }

    @action
    set total(total: number) {
        this._total = total;
    }
}

export interface IOrder {
    name: string;
    total: number;
}