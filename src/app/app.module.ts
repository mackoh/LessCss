import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatsComponent } from './floats/floats.component';
import { PositionComponent } from './position/position.component';
import { VariablesComponent } from './variables/variables.component';
import { HomeComponent } from './home/home.component';
import { ShapesComponent } from './shapes/shapes.component';
import { FirstComponentComponent } from './home/first-component/first-component.component';
import { SecondComponentComponent } from './home/second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatsComponent,
    PositionComponent,
    VariablesComponent,
    HomeComponent,
    ShapesComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
