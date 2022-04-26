import Phaser from 'phaser'
import { TileProperty } from './Tile'

export default class Weapon extends Phaser.GameObjects.Shape
{
	hull:Phaser.GameObjects.Shape
	
	constructor(scene: Phaser.Scene,properties:TileProperty)
	{
        super(scene,'rectangle')
        this.hull = new Phaser.GameObjects.Rectangle(scene,properties.x, properties.y, properties.width,properties.height, 0xFF3231);
   
   
      
        scene.add.existing(this.hull)
        this.hull.setInteractive()
        scene.input.on('pointerdown',this.startDrag,this);
     
	}

    startDrag(pointer,targets) {
    this.scene.input.off('pointerdown',this.startDrag,this);
    this.dragObj=targets[0];
    this.scene.input.on('pointermove',this.doDrag,this);
    this.scene.input.on('pointerup',this.stopDrag,this)

    }

    doDrag(pointer) {
        this.dragObj.x = pointer.x;
        this.dragObj.y = pointer.y;
    }
    stopDrag() {
        this.scene.input.on('pointerdown',this.startDrag,this);
        this.scene.input.off('pointermove',this.doDrag,this);
        this.scene.input.on('pointerup',this.stopDrag,this);
    }


	
}