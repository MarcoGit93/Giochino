import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { TableService,SquaresToSwitch } from '../table.service';
import { SettingService } from '../settings.service';
 



@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent implements OnInit {

  constructor(private widgetService: WidgetService,private tableService: TableService, private settingService: SettingService) { }

  Squares:SquaresToSwitch ={x:0,x1:0,y:0,y1:0};
  numeri:string[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','']
  winCondition:string[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','']
  emptyPos?:number;
  numeroMosse:number = 0;
  win: boolean = false;
  settingNumber:number = 4;

  ngOnInit(): void {
    this.settingNumber = this.settingService.getDimensionOfSquare();
    this.tableService.initGame();
    this.emptyPos = this.tableService.findEmptySpace();
    this.Squares.x1 = this.emptyPos%this.settingNumber +1;
    this.Squares.y1 = Math.floor((this.emptyPos+0.99)/this.settingNumber) +1
    this.numeri = this.tableService.getAllPosition();
    this.numeroMosse = 0;
  }
  getPos(posizione: number ){
    this.Squares.x =  posizione%this.settingNumber +1
    this.Squares.y = Math.floor((posizione+0.99)/this.settingNumber) +1;
    this.tableService.setClickedCell(this.Squares);
    (this.Squares.x == this.Squares.x1) !== (this.Squares.y == this.Squares.y1) ? this.tableService.funzionePerMuovere(this.numeri, posizione): '';
    this.numeroMosse = this.widgetService.getNumeroMosse(); 
    this.emptyPos = this.tableService.findEmptySpace();
    this.Squares.x1 = this.emptyPos%this.settingNumber +1;
    this.Squares.y1 = Math.floor((this.emptyPos+0.99)/this.settingNumber) +1
    this.numeri = this.tableService.getAllPosition();
    this.tableService.checkWinCondition(this.numeri) == true ? this.win=true : console.log("continua")
  }
}
