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
        this.dataStore.get('lipstick').draw();
        this.dataStore.showShop = true;
      }
    });
  }

  // TODO: 购买逻辑 DEMO
  handleLipstick(touches) {
    const lipstick = this.dataStore.get('lipstick');
    lipstick.handleTap({
      ...touches,
      action: () => {
        console.log('buy');
        localStorage.coins = Number(localStorage.coins) - this.dataStore.lipsticks[0].price * Math.pow(1000, this.dataStore.lipsticks[0].priceUnit - localStorage.unit);
        localStorage.coinPerSec = Number(localStorage.coinPerSec) + this.dataStore.lipsticks[0].produce * Math.pow(1000, this.dataStore.lipsticks[0].produceUnit - localStorage.unitPerSec);
        this.dataStore.box[0] = this.dataStore.lipsticks[0];
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
        const stage = this.dataStore.get('stage');
        const canvas = this.dataStore.canvas;
        const stageX = [
          canvas.width / 4 - stage.width / 2,
          canvas.width / 2 - stage.width / 2,
          canvas.width / 2 + stage.width,
        ];
        const stageY = [
          canvas.height / 4 + canvas.height / 30,
          canvas.height / 4 + canvas.height / 30 * 2 + stage.height,
          canvas.height / 4 + canvas.height / 30 * 3 + stage.height * 2,
          canvas.height / 4 + canvas.height / 30 * 4 + stage.height * 3,
        ];
        for (let i = 0; i <= 2; i++) {
          for (let j = 0; j <= 3; j++) {
            this.dataStore.get('stage').draw(stageX[i], stageY[j]);
          }
        }
      }
    });
  }

  run() {
    setInterval(() => {
      
      let power = localStorage.unitPerSec - localStorage.unit;
      localStorage.coins = Number(localStorage.coins) + Number(localStorage.coinPerSec) * Math.pow(1000, power);
      if (localStorage.coins > 999) {
        localStorage.unit = Number(localStorage.unit) + 1;
        localStorage.coins = localStorage.coins / 1000;
      }
    }, 1000);
  }
}
