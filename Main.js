import { ResourceLoader } from './app/base/ResourceLoader.js';
import { BackGround } from './app/runtime/BackGround.js';
import { UserName } from './app/runtime/UserName.js';
import { Coin } from './app/runtime/Coin.js';
import { RecycleButton } from './app/player/RecycleButton.js';
import { DataStore } from './app/base/DataStore.js';
import { Director } from './app/Director.js';

export class Main {
  constructor() {
    this.canvas = document.getElementById('game_canvas');
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }

  onResourceFirstLoaded(map) {
    this.dataStore.canvas = this.canvas;
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.director.isGameOver = true;
    this.dataStore
      .put('background', BackGround)
      .put('username', UserName)
      .put('coin', Coin)
      .put('recycle', RecycleButton);
    this.dataStore.get('background').draw();
    this.dataStore.get('username').draw();
    this.dataStore.get('coin').draw();
    this.dataStore.get('recycle').draw();
    this.registerEvent();
  }

  init() {
    this.director.isGameOver = false;
    this.dataStore
      .put('background', BackGround)
      .put('username', UserName);
    this.registerEvent();
    this.director.run();
  }

  registerEvent() {
    // this.canvas.addEventListener('touchstart', e => {
    //   e.preventDefault();
    //   if (this.director.isGameOver) {
    //     console.log('游戏开始');
    //     this.init();
    //   } else {

    //   }
    // });
  }
}
