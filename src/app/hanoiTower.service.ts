
export interface TowersState{
    [key: number]: number[]
    1:number[];
    2:number[];
    3:number[];
}

export interface SwitchItem{
    
    fromTower:number[];
    toTower:number[];
}


export class HanoiTowerService{

    towersState:TowersState = {1:[2,1],2:[3],3:[4]}
    
    getTowerState(towerNum: number):number[]{
        return this.towersState[towerNum];
    }

    moveDisk(fromTower:number[], toTower:number[]){
        this.isLegalMove( fromTower.at(-1) , toTower.at(-1)) == true ? (toTower.push(fromTower.at(-1) as number), fromTower.pop()) : console.log("mossa illegale")
    }

    isLegalMove(fromTower:number | undefined, toTower: number | undefined):boolean{
        return toTower != undefined ? fromTower! < toTower! : true;
    }

    

}