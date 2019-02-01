import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';
import { unit } from '../base/Unit.js';
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
      () => {
        super.draw();

        ctx.font = '20px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.dataStore.coins + unit[this.dataStore.unit], this.left + 30, this.top + 26);
      }, 1000
    );

  }
}
