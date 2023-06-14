import { Component, Input, OnInit } from '@angular/core';
import { HanoiTowerService } from '../hanoiTower.service';

@Component({
  selector: 'app-hanoi-tower',
  templateUrl: './hanoi-tower.component.html',
  styleUrls: ['./hanoi-tower.component.css']
})
export class HanoiTowerComponent implements OnInit {
  @Input() towerCurrentState:number[] =[];

  constructor(private hanoiService:HanoiTowerService) { }

  ngOnInit(): void {
    
  }

}
