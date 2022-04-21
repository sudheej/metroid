import Phaser from 'phaser';

export default class Tile extends Phaser.GameObjects.Shape {
  rect!:Phaser.GameObjects.Rectangle;
    constructor(scene:Phaser.Scene,x:number, y:number,height:number,width:number) {
        super(scene,'rectangle')
    this.rect = new Phaser.GameObjects.Rectangle(scene,x, y, width,height, 0x6666ff);
    this.rect.setStrokeStyle(1)
    scene.add.existing(this.rect)
}
}