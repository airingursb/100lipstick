import { Sprite } from '../base/Sprite.js';
import { unit } from '../base/Unit.js';

import { DataStore } from '../base/DataStore.js';
import { Storage } from '../base/Stroage.js';

export class Coin extends Sprite {
  constructor() {
    const image = Sprite.getImage('userCoins');
    super(image,
      0, 0,
      image.width, image.height,
      22, 42 + 40,
      image.width / 2, image.height / 2);
    this.dataStore = DataStore.getInstance();
  }

  draw() {
    const ctx = this.dataStore.ctx;
    
    setInterval(
      async () => {
        super.draw();
        let coins = await Storage.get('coins', 0);
        let u = await Storage.get('unit', 0);
        ctx.font = '20px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.fillText((coins).toFixed(2) + unit[u], this.left + 30, this.top + 26);
      }, 1000
    );

  }
}
