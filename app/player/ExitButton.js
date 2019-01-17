import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class ExitButton extends Sprite {

  constructor() {
    const image = Sprite.getImage('exit');
    const shop = DataStore.getInstance().get('shop');
    super(image,
      0, 0,
      image.width, image.height,
      shop.right - image.width / 4,
      shop.top - image.height / 4,
      image.width / 2, image.height / 2);

  }
}
