import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class ShopButton extends Sprite {
  constructor() {
    const image = Sprite.getImage('shopButton');
    super(image,
      0, 0,
      image.width, image.height,
      240, 586,
      image.width / 2, image.height / 2);
  }
}
