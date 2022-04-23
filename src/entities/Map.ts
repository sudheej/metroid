import Phaser, { Tweens } from 'phaser';
import Tile,{TileProperty} from './Tile';
import {v4 as uuid4} from 'uuid'

interface MapProperties {
    returnMap():TileProperty[][]
}
export default class Map implements MapProperties {
    scene;
    genesis: boolean;
    mapping:TileProperty[][];
    constructor(scene: Phaser.Scene, mapping:TileProperty[][]) {
        this.scene = scene
        this.genesis = true
        this.mapping = mapping
    }

    returnMap(): TileProperty[][] {
        throw new Error('Method not implemented.');
    }


    generateTileMap(originX: number, orginY: number) {
        let genesisTile: Tile;
        let previousTile: Tile;
        let shiftY: number = orginY;
        let shiftX: number = originX;
        let nHorizontal = this.mapping.length
        let nVeritical = this.mapping[0].length
        let testMap: TileProperty[][] = Array(nHorizontal).fill(0).map(() => new Array(nVeritical).fill(0));
    
        for (let vi = 0; vi < nVeritical; vi++) {

            for (let hi = 0; hi < nHorizontal; hi++) {
                
                if (this.genesis) {
                    let plainTile:TileProperty = {
                        _id: this.mapping[vi][hi]._id,
                        x: originX,
                        y: shiftY,
                        height: this.mapping[vi][hi].height,
                        width: this.mapping[vi][hi].width ,
                        type: this.mapping[vi][hi].type
                    }
                    genesisTile = new Tile(this.scene,plainTile)
                    this.genesis = false
                    previousTile = genesisTile
                    
                    testMap[vi][hi] = genesisTile.returnTileProperty()
                }
                else {
                    const newTilePositionX = previousTile.rect.x + previousTile.rect.width
                    const newTilePositionY = shiftY
                    let plainTile:TileProperty = {
                        _id: this.mapping[vi][hi]._id,
                        x: newTilePositionX,
                        y: newTilePositionY,
                        height: this.mapping[vi][hi].height,
                        width: this.mapping[vi][hi].width ,
                        type: this.mapping[vi][hi].type
                    }
                    let tile = new Tile(this.scene, plainTile)

                    
                    previousTile = tile;
                    testMap[vi][hi] = tile.returnTileProperty()

                }

            }

            shiftY = shiftY + this.mapping[vi][0].height
            this.genesis = true



        }

        //console.log(testMap)
console.log(this.mapping)
    }
}
