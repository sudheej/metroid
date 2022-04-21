import Phaser from 'phaser';
import Map from '../entities/Map'

export default class Main extends Phaser.Scene {
  map!: Map;
  constructor() {
    super('GameScene');
  }

  preload() {
    
  }

  create() {
    this.map = new Map(this,100,200);
    this.map.generateTileMap(100,100,10,10,20,20);

  }
}
