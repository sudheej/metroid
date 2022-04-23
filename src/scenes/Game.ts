import Phaser from 'phaser';
import Map from '../entities/Map'
import PlainMap from '../maps/plainfield.json'
import Tile, { TileProperty } from '../entities/Tile';
export default class Main extends Phaser.Scene {
  map!: Map;
  constructor() {
    super('GameScene');
  }

  preload() {
    
  }

  create() {
    const plainm:TileProperty[][] = PlainMap;
    this.map = new Map(this,plainm);
    
    this.map.generateTileMap(100,100,20,20,25,25);

  }
}
