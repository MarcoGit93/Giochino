import { Component, OnInit } from '@angular/core';
import { SettingService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  selectedDim:number = 4;

  ngOnInit(): void {
    this.selectedDim = this.settingService.getDimensionOfSquare();
  }

  onSubmit(){
    console.log(this.selectedDim)
    this.settingService.setDimensionOfSquare(this.selectedDim)
  }
}
