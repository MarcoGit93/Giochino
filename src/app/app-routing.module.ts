import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiocoComponent } from './gioco/gioco.component';
import { SettingsComponent } from './settings/settings.component';
import { HanoihomeComponent } from './hanoihome/hanoihome.component';

const routes: Routes = [
  
  {path:'home',title:'HOME',component:HomeComponent},
  {path:'game',title:'GAME',component:GiocoComponent},
  {path:'hanoiHome',title:'HANOI TOWER',component:HanoihomeComponent},
  {path:'settings',title:'SETTINGS',component:SettingsComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
