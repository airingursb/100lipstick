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
