import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroScreensComponent } from './screens/registro-screens/registro-screens.component';
import { InstruccionesComponent } from './screens/instrucciones/instrucciones.component';
import { RegistroRoutingModule } from './registro-routing.module';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { ReactiveFormsModule } from '@angular/forms';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [RegistroScreensComponent, InstruccionesComponent],
  imports: [
    CommonModule,
    NgWizardModule.forRoot(ngWizardConfig),
    ReactiveFormsModule
  ],
  exports:[
    RegistroScreensComponent,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
