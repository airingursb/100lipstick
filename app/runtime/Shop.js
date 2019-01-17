import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class Shop extends Sprite {
  constructor() {
    const image = Sprite.getImage('shopBackground');
    super(image,
      0, 0,
      image.width, image.height,
      (DataStore.getInstance().canvas.width - (image.width / 2)) / 2,
      (DataStore.getInstance().canvas.height - (image.height / 2)) / 2,
      image.width / 2, image.height / 2);
    this.dataStore = DataStore.getInstance();
  }

  draw() {
    super.draw();
    this.dataStore.get('exitBtn').draw();
  }
}
