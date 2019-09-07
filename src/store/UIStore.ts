import { RootStore } from ".";
import { computed, action, observable } from "mobx";

export default class UIStore {
    @observable protected _editing: string|null = null;

    constructor(protected rootStore: RootStore) {
        this._editing = rootStore.orderStore.orders[0].id;
    }

    @action.bound
    edit(id: string) {
        const found = this.rootStore.orderStore.find(id);

        if (found) {
            this._editing = id;
        }
    }

    @action.bound
    clear() {
        this._editing = null;
    }

    get editing() {
        return this._editing;
    }
}