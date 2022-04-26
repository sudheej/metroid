import Phaser from 'phaser';
import Map from '../entities/Map'
import PlainMap from '../maps/plainfield.json'
import Tile, { TileProperty } from '../entities/Tile';
import Weapon from '../entities/Weapon';
import {v4 as uuid4} from 'uuid'
export default class Main extends Phaser.Scene {
  map!: Map;
  weapon: Weapon | undefined;
  constructor() {
    super('GameScene');
  }

  preload() {
    
  }

  create() {
    const plainm:TileProperty[][] = PlainMap;
    const testWeapon:TileProperty = {
      _id: uuid4(),
      x:10,
      y:10,
      height: 20,
      width: 20,
      type: "weapon"
    }
    this.map = new Map(this,plainm);
    
    this.map.generateTileMap(100,100,20,20,25,25);
    
    this.weapon = new Weapon(this,testWeapon)

  }
}


