import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatsComponent } from './floats/floats.component';
import { PositionComponent } from './position/position.component';
import { VariablesComponent } from './variables/variables.component';
import { HomeComponent } from './home/home.component';
import { ShapesComponent } from './shapes/shapes.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatsComponent,
    PositionComponent,
    VariablesComponent,
    HomeComponent,
    ShapesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
