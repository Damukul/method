import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1ComponentComponent } from './module1-component/module1-component.component';

const routes: Routes = [
  {path:'module1-component', component:Module1ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
