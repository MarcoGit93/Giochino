import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiocoComponent } from './gioco/gioco.component';

const routes: Routes = [
  
  {path:'home',title:'HOME',component:HomeComponent},
  {path:'game',title:'GAME',component:GiocoComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
