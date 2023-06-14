import { compileInjectable } from "@angular/compiler";
import { Injectable, OnInit } from "@angular/core";
import { WidgetService } from "./widget.service";
import { SettingService } from "./settings.service";


export interface SquaresToSwitch{
  
    x:number;
    y:number;
    x1:number;
    y1:number;
  
  }


@Injectable()
export class TableService implements OnInit{

constructor(private  widgetService:WidgetService, private settingService: SettingService) { }

  Squares:SquaresToSwitch ={x:0,x1:0,y:0,y1:0};
  numeri:string[] = [];
  winCondition:string[] = []
  emptyPos?:number;
  numeroMosse:number = 0;
  dimensioneTabella:number = 4;

  ngOnInit(): void {
    this.dimensioneTabella = this.settingService.getDimensionOfSquare();
    this.initTableDimension(this.dimensioneTabella)
  }

  initTableDimension(dimension:number){
    this.numeri = []
    this.winCondition = []
    
    for(let i = 1; i<= dimension*dimension-1; i++){
      this.numeri.push(i.toString())
      this.winCondition.push(i.toString())
    }
    this.numeri.push('');
    this.winCondition.push('')
  }

  getAllPosition():string[]{
    return this.numeri;
  }

  initGame(){
    this.ngOnInit();
    this.setEmptyCell();
    let i = 0;
      while(i<100){
        let randPos = Math.floor(Math.random()*100%(this.dimensioneTabella*this.dimensioneTabella))
        this.Squares.x =  randPos%this.dimensioneTabella +1
        this.Squares.y = Math.floor((randPos+0.99)/this.dimensioneTabella) +1;
        (this.Squares.x == this.Squares.x1) !== (this.Squares.y == this.Squares.y1) ?( i++,this.funzionePerMuovere(this.numeri, randPos)): '';
      }
      this.widgetService.resetCounter();
    }

    findEmptySpace():number{return  this.numeri.findIndex(this.isEqualToEmpty)}

    isEqualToEmpty = (element:string) => element == '';
    
      setEmptyCell(){

        this.emptyPos = this.findEmptySpace();
        this.Squares.x1 = this.emptyPos%this.dimensioneTabella +1;
        this.Squares.y1 = Math.floor((this.emptyPos+0.99)/this.dimensioneTabella) +1

      }

      setClickedCell(square: SquaresToSwitch){
          this.Squares.x = square.x;
          this.Squares.y = square.y;
      }



      funzionePerMuovere(currentState:string[], pos:number){  
        let diffY =this.Squares.y1 - this.Squares.y;
        let diffX = this.Squares.x1 - this.Squares.x;
         if(this.Squares.x == this.Squares.x1  ) {
          if( diffY > 0){
              while(diffY > 0){         
                let app = currentState[pos + this.dimensioneTabella*( diffY - 1)] 
                currentState[pos + this.dimensioneTabella*( diffY - 1)] = '';
                currentState[pos +this.dimensioneTabella*(diffY) ] = app;
                diffY--;
              }
          }else{
            
            while(diffY < 0){
              let app = currentState[ pos + this.dimensioneTabella*(diffY+1)] 
              currentState[ pos + this.dimensioneTabella*(diffY+1)] = '';
              currentState[ pos +this.dimensioneTabella*(diffY)] = app;
              diffY++;
            }
      
          }
         
         }else{
      
          if( diffX > 0){
            while(diffX > 0){
              let app = currentState[pos +(diffX-1)] 
              currentState[pos +(diffX-1)] = '';
              currentState[pos +(diffX)] = app;
              diffX--;
            }
        }else{
          while(diffX < 0){
            let app = currentState[pos + (diffX +1)] 
            currentState[pos + (diffX +1)] = '';
            currentState[pos +(diffX)] = app;
            diffX++;
          }
      
        }
        
         }
         this.setEmptyCell();
         this.widgetService.aumentaMosse();
         this.numeroMosse = this.widgetService.getNumeroMosse();
        }



        checkWinCondition(numeri:string[]):boolean{
          let win = true;
          for(let i = 0; i < numeri.length; i++) if(numeri[i] != this.winCondition[i]) win = false;
          return win
        }

}

