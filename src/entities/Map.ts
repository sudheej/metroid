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


    generateTileMap(originX: number, orginY: number, nHorizontal: number, nVeritical: number, tHeight: number, tWidth: number) {
        let genesisTile: Tile;
        let previousTile: Tile;
        let shiftY: number = orginY;
        let shiftX: number = originX;
        let testMap: TileProperty[][] = Array(nHorizontal).fill(0).map(() => new Array(nVeritical).fill(0));
    
        for (let vi = 0; vi < nVeritical; vi++) {

            for (let hi = 0; hi < nHorizontal; hi++) {
                
                if (this.genesis) {
                    let plainTile:TileProperty = {
                        _id: uuid4(),
                        x: originX,
                        y: shiftY,
                        height: tHeight,
                        width:tWidth ,
                        type: "plain"
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
                        _id: uuid4(),
                        x: newTilePositionX,
                        y: newTilePositionY,
                        height: tHeight,
                        width:tWidth ,
                        type: "plain"
                    }
                    let tile = new Tile(this.scene, plainTile)

                    
                    previousTile = tile;
                    testMap[vi][hi] = tile.returnTileProperty()

                }

            }

            shiftY = shiftY + tHeight
            this.genesis = true



        }

        //console.log(testMap)
console.log(this.mapping)
    }
}
