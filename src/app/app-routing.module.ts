import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { FloatsComponent } from './floats/floats.component';
import { PositionComponent } from './position/position.component';
import { ShapesComponent } from './shapes/shapes.component';
import { VariablesComponent } from './variables/variables.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'float', component: FloatsComponent },
      { path: 'position', component: PositionComponent },
      { path: 'shapes', component: ShapesComponent },
      { path: 'variables', component: VariablesComponent }])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
