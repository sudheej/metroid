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
  graphics!:Phaser.GameObjects.Graphics;
  properties:TileProperty
  layer:Phaser.GameObjects.Layer;
    constructor(scene:Phaser.Scene,properties:TileProperty) {
        super(scene,'rectangle')
    this.layer = new Phaser.GameObjects.Layer(scene) 
    this.rect = new Phaser.GameObjects.Rectangle(scene,properties.x, properties.y, properties.width,properties.height, 0x6666ff);
    this.graphics = new Phaser.GameObjects.Graphics(scene)
    this.rect.setStrokeStyle(1)
    this.layer.add(this.rect)
    if(properties.type==="path") {
      this.rect.fillColor = 0x000000
    }
    else if(properties.type==="start_path") {
      this.rect.fillColor = 0x000000

      this.graphics.fillGradientStyle(0x7CFC00, 0xADFF2F, 0x000000, 0x000000, 1);
      //this.graphics.fillRect(145, 100, 20, 20);
  
     this.graphics.fillRect(properties.x-12,properties.y-10,properties.width,properties.height)
    //this.layer.add(this.graphics)
    //this.layer.sendToBack(this)
    //this.layer.bringToTop(this.graphics)
      scene.add.existing(this.graphics)
    }
    else {
      scene.add.existing(this.rect)
    }
    
   
    this.properties = properties
}
  returnTileProperty(): TileProperty {
    return this.properties
  }

}