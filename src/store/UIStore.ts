import { RootStore } from ".";
import { computed, action, observable } from "mobx";

export default class UIStore {
    @observable protected _editing: string|null = null;

    constructor(protected rootStore: RootStore) {
        this._editing = rootStore.orderStore.orders[0].id;
    }

    @action
    edit(id: string) {
        const found = this.rootStore.orderStore.find(id);

        if (found) {
            this._editing = id;
        }
    }

    @action
    clear() {
        this._editing = null;
    }

    @computed
    get editing() {
        if (this._editing) {
            return this.rootStore.orderStore.find(this._editing);
        }
        
        return null;
    }
}