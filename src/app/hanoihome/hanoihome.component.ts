import { Component, OnInit } from '@angular/core';
import { HanoiTowerService, SwitchItem } from '../hanoiTower.service';
@Component({
  selector: 'app-hanoihome',
  templateUrl: './hanoihome.component.html',
  styleUrls: ['./hanoihome.component.css']
})
export class HanoihomeComponent implements OnInit {

  constructor(private hanoiService:HanoiTowerService) { }

  towerOne:number[] = []
  towerTwo:number[] = []
  towerThree:number[] = []

  switchItem:SwitchItem = {fromTower:[], toTower:[]}

  ngOnInit(): void {
    this.towerOne = this.hanoiService.getTowerState(1);
    this.towerTwo = this.hanoiService.getTowerState(2);
    this.towerThree = this.hanoiService.getTowerState(3);
    this.switchItem ={fromTower:[],toTower:[]}
  }

  setSwitchElement(elementToSet:number[]){
    this.switchItem.fromTower.length != 0  ? this.switchItem.toTower = elementToSet : this.switchItem.fromTower = elementToSet; 
    this.switchItem.fromTower.length != 0 && this.switchItem.toTower.length != 0 ?  (this.hanoiService.moveDisk(this.switchItem.fromTower,this.switchItem.toTower),this.ngOnInit()) : '';
    
  }

}
