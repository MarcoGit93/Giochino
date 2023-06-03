import { Component, OnInit } from '@angular/core';


export interface SquaresToSwitch{
  
  x:number;
  y:number;
  x1:number;
  y1:number;

}

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent implements OnInit {

  constructor() { }

  numeri:string[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','']
  Squares:SquaresToSwitch ={x:0,x1:0,y:0,y1:0};
  emptyPos?:number;

 
  ngOnInit(): void {
    this.emptyPos = this.findEmptySpace();
    this.Squares.x1 = this.emptyPos%4 +1;
    this.Squares.y1 = Math.floor((this.emptyPos+0.99)/4) +1
  }

  getPos(posizione: number ){
    this.Squares.x =  posizione%4 +1
    this.Squares.y = Math.floor((posizione+0.99)/4) +1;
    (this.Squares.x == this.Squares.x1) !== (this.Squares.y == this.Squares.y1) ? this.funzionePerMuovere(this.numeri, posizione): ''; 
  }

  findEmptySpace():number{
    return  this.numeri.findIndex(this.isEqualToEmpty)
  }
  isEqualToEmpty = (element:string) => element == '';

  funzionePerMuovere(currentState:string[], pos:number){  
  let diffY =this.Squares.y1 - this.Squares.y;
  let diffX = this.Squares.x1 - this.Squares.x;
   if(this.Squares.x == this.Squares.x1  ) {
    if( diffY > 0){
        while(diffY > 0){         
          let app = currentState[pos + 4*( diffY - 1)] 
          currentState[pos + 4*( diffY - 1)] = '';
          currentState[pos +4*(diffY) ] = app;
          diffY--;
        }
    }else{
      
      while(diffY < 0){
        let app = currentState[ pos + 4*(diffY+1)] 
        currentState[ pos + 4*(diffY+1)] = '';
        currentState[ pos +4*(diffY)] = app;
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
   this.emptyPos = this.findEmptySpace();
   this.Squares.x1 = this.emptyPos%4 +1;
   this.Squares.y1 = Math.floor((this.emptyPos+0.99)/4) +1
  }
}
