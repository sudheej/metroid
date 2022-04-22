import Phaser, { Tweens } from 'phaser';
import Tile from './Tile';

export default class Map {
    scene;
    genesis: boolean;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene
        this.genesis = true
    }


    generateTileMap(originX: number, orginY: number, nHorizontal: number, nVeritical: number, tHeight: number, tWidth: number) {
        let genesisTile: Tile;
        let previousTile: Tile;
        let shiftY: number = orginY;
        let shiftX: number = originX;
        for (let vi = 0; vi < nVeritical; vi++) {
            //Target is to make y as y + tdheight and x as origin
            //

            for (let hi = 0; hi < nHorizontal; hi++) {
                
                if (this.genesis) {
                    genesisTile = new Tile(this.scene, originX, shiftY, tHeight, tWidth)

                    this.genesis = false
                    previousTile = genesisTile

                }
                else {
                    const newTilePositionX = previousTile.rect.x + previousTile.rect.width
                    const newTilePositionY = shiftY
                    let tile = new Tile(this.scene, newTilePositionX, newTilePositionY, tHeight, tWidth)

                    console.log(tile.rect.height)
                    previousTile = tile;

                }

            }

            shiftY = shiftY + tHeight
            this.genesis = true



        }

    }
}
