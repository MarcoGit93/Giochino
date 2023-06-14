import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GiocoComponent } from './gioco/gioco.component';
import { CellComponent } from './cell/cell.component';
import { WidgetService } from './widget.service';
import { TableService } from './table.service';
import { SettingService } from './settings.service';
import { SettingsComponent } from './settings/settings.component';
import { HanoihomeComponent } from './hanoihome/hanoihome.component';
import { HanoiTowerComponent } from './hanoi-tower/hanoi-tower.component';
import { HanoiDiskComponent } from './hanoi-disk/hanoi-disk.component';
import { HanoiTowerService } from './hanoiTower.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiocoComponent,
    CellComponent,
    SettingsComponent,
    HanoihomeComponent,
    HanoiTowerComponent,
    HanoiDiskComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WidgetService,TableService,SettingService,HanoiTowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
