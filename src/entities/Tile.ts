import Phaser from 'phaser';

export type TileProperty =  {
  _id: string,
  x: number,
  y: number,
  height: number,
  width: number,
  type: string
}

interface TileCapabilites {

  returnTileProperty():TileProperty

}
export default class Tile extends Phaser.GameObjects.Shape implements TileCapabilites{
  rect!:Phaser.GameObjects.Rectangle;
  properties:TileProperty
    constructor(scene:Phaser.Scene,properties:TileProperty) {
        super(scene,'rectangle')
    this.rect = new Phaser.GameObjects.Rectangle(scene,properties.x, properties.y, properties.width,properties.height, 0x6666ff);
    this.rect.setStrokeStyle(1)
    scene.add.existing(this.rect)
    this.properties = properties
}
  returnTileProperty(): TileProperty {
    return this.properties
  }

}