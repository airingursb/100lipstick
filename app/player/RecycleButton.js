import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class RecycleButton extends Sprite {
  constructor() {
    const image = Sprite.getImage('recycleButton');
    super(image,
      0, 0,
      image.width, image.height,
      280, 590,
      image.width / 2, image.height / 2);
  }
}
