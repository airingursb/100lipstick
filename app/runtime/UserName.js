import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class UserName extends Sprite {
  constructor() {
    const image = Sprite.getImage('nickname');
    super(image,
      0, 0,
      image.width, image.height,
      22, 42,
      image.width / 2, image.height / 2);
  }
}
