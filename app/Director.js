import { DataStore } from './base/DataStore.js';

export class Director {
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  constructor() {
    this.dataStore = DataStore.getInstance();
  }

  // 点击商城按钮
  handleShopBtn(touches) {
    const shopBtn = this.dataStore.get('shopBtn');
    shopBtn.handleTap({
      ...touches,
      action: () => {
        this.dataStore.get('shop').draw();
        this.dataStore.showShop = true;
      }
    });
  }

  // 点击退出商城按钮
  handleExitBtn(touches) {
    const exitBtn = this.dataStore.get('exitBtn');
    exitBtn.handleTap({
      ...touches,
      action: () => {
        this.dataStore.showShop = false;
        this.dataStore.get('background').draw();
        this.dataStore.get('username').draw();
        this.dataStore.get('coin').draw();
        this.dataStore.get('shopBtn').draw();
        this.dataStore.get('recycleBtn').draw();
      }
    });
  }

  run() {
    if (!this.isGameOver) {
      this.dataStore.get('background').draw();
      let timer = requestAnimationFrame(() => this.run());
      this.dataStore.put('timer', timer);
    } else {
      cancelAnimationFrame(this.dataStore.get('timer'));
      this.dataStore.destroy();
    }
  }
}
