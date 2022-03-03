import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { InstruccionesComponent } from './screens/instrucciones/instrucciones.component';
import { RegistroScreensComponent } from './screens/registro-screens/registro-screens.component';


const routes: Routes=[
  {
    path:'',
    children:[
      {path:'info',component:InstruccionesComponent},
      {path:'registro',component:RegistroScreensComponent},
      {path:'**',redirectTo:'info'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RegistroRoutingModule { }
