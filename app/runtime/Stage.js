import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class Stage extends Sprite {
  constructor() {
    const image = Sprite.getImage('stage');
    super(image,
      0, 0,
      image.width, image.height,
      0, 0,
      image.width / 2, image.height / 2);
  }
}
