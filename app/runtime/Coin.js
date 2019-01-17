import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class Coin extends Sprite {
  constructor() {
    const image = Sprite.getImage('userCoins');
    super(image,
      0, 0,
      image.width, image.height,
      22, 42 + 40,
      image.width / 2, image.height / 2);
  }
}
