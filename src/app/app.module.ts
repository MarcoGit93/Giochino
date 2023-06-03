import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GiocoComponent } from './gioco/gioco.component';
import { CellComponent } from './cell/cell.component';
import { WidgetService } from './widget.service';
import { TableService } from './table.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiocoComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WidgetService,TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
