class GlobalState {
  constructor() {
    if (GlobalState.instance) return GlobalState.instance;

    this.selectedItem = null;
    this.inventory = [];
    this.interactedItems = {};

    GlobalState.instance = this;
  }

  addItem(itemKey) {
    if (!this.inventory.includes(itemKey)) {
      this.inventory.push(itemKey);
    }
  }

  removeItem(itemKey) {
    this.inventory = this.inventory.filter(i => i !== itemKey);
    if (this.selectedItem === itemKey) {
      this.selectedItem = null;
    }
  }

  reset() {
    this.selectedItem = null;
    this.inventory = [];
  }
}

export const globalState = new GlobalState();
