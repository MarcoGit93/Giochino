export class WidgetService{

    numeroMosse = 0;

    aumentaMosse(){
        this.numeroMosse++;
    }

    getNumeroMosse():number{
        return this.numeroMosse;
    }

    resetCounter(){
        this.numeroMosse = 0;
    }


}