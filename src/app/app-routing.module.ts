import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'prueba',
  loadChildren:()=>import('./registro/registro.module').then(m=>m.RegistroModule)
},
{
  path:'**',
  redirectTo:'prueba'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
