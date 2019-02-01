import { DataStore } from './DataStore.js';

export class Sprite {

  constructor(img = null,
    srcX = 0,
    srcY = 0,
    srcW = 0,
    srcH = 0,
    x = 0, y = 0,
    width = 0, height = 0) {
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = y;
    this.bottom = y + height;
    this.left = x;
    this.right = x + width;
  }

  static getImage(key) {
    return DataStore.getInstance().res.get(key);
  }

  /**
   * img 传入Image对象
   * srcX 要剪裁的起始X坐标
   * srcY 要剪裁的起始Y坐标
   * srcW 剪裁的宽度
   * srcH 剪裁的高度
   * x 放置的x坐标
   * y 放置的y坐标
   * width 要使用的宽度
   * height 要使用的高度
   */
  draw(
    x = this.x,
    y = this.y,
    width = this.width,
    height = this.height,
    img = this.img,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH) {
    this.ctx.drawImage(
      img,
      srcX,
      srcY,
      srcW,
      srcH,
      x,
      y,
      width,
      height
    );
  }

  handleTap(touches) {
    const { x, y, action } = touches;
    console.log(touches)
    if (x >= this.left && x <= this.right
      && y >= this.top && y <= this.bottom) {
      action();
    }
  }
}
