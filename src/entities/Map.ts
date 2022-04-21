import Phaser, { Tweens } from 'phaser';
import Tile from './Tile';

export default class Map  {
  scene;
  genesis:boolean;
  constructor(scene:Phaser.Scene,x:number, y:number) {
    this.scene = scene
    this.genesis = true
}


  generateTileMap(originX:number,orginY:number,nHorizontal:number,nVeritical:number,tHeight:number,tWidth:number) {
    let genesisTile:Tile;
    let previousTile:Tile;  
    
        for(let hi=0;hi<=nHorizontal;hi++) {
            if(this.genesis) {
                genesisTile = new Tile(this.scene,originX,orginY,tHeight,tWidth)
             
            this.genesis = false
            previousTile = genesisTile
            
            }
            else {
                const newTilePositionX = previousTile.rect.x + previousTile.rect.width
                const newTilePositionY = previousTile.rect.y
                let tile = new Tile(this.scene,newTilePositionX,newTilePositionY,tHeight,tWidth)
             
                console.log(tile.rect.height)
                previousTile = tile;
                
            }
            

        }   
    
  } 
}
