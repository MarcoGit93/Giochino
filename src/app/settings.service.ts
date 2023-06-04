import { ReturnStatement } from "@angular/compiler";

export class SettingService{


    dimensionOfSquare:number = 4;

    setDimensionOfSquare(newDimension: number)
    {
        this.dimensionOfSquare = newDimension;
    }

    getDimensionOfSquare():number{
        return this.dimensionOfSquare;
    }



}