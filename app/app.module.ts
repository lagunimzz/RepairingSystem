import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LayOutComponent } from './layout.component';
import { AppRoutingModule }     from './app-routing.module';
import { RepairComputerFormComponent } from './repair-computer-form.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, LayOutComponent, RepairComputerFormComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
