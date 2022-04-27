import Phaser from 'phaser'
import { TileProperty } from './Tile'
import Map from './Map'

interface BasicWeapon {
    hull:Phaser.GameObjects.Shape,
    dragObj: Phaser.GameObjects.GameObject,
    startDrag(pointer:any,targets):void,
    doDrag(pointer):void,
    stopDrag():void,
    getIndexOfTileInMap(weapon:Weapon):void;

}

export default class Weapon extends Phaser.GameObjects.Shape implements BasicWeapon
{
	hull
	dragObj!: Phaser.GameObjects.GameObject
	map:Map
    constructor(scene: Phaser.Scene,properties:TileProperty)
	{
        super(scene,'rectangle')
        this.hull = new Phaser.GameObjects.Rectangle(scene,properties.x, properties.y, properties.width,properties.height, 0xFF3231);
        console.log(scene.map.returnMap())    
      
        scene.add.existing(this.hull)
        this.hull.setInteractive()
        scene.input.on('pointerdown',this.startDrag,this);
        
     
	}
    getIndexOfTileInMap(weapon:Weapon): void {
        console.log(weapon.hull.x)
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
        this.getIndexOfTileInMap(this);
    }


	
}