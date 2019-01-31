import { Sprite } from '../base/Sprite.js';

export class Lipstick extends Sprite {

  constructor() {
    const image = Sprite.getImage('lipstick');
    super(image,
      0, 0,
      image.width, image.height,
      0, 0,
      image.width / 2, image.height / 2);
  }
}
