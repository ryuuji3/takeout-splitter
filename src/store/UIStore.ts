import RootStore from ".";

export default class UIStore {
    protected rootStore: RootStore;

    public constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}