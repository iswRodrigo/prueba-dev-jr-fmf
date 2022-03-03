import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";
import { generos } from 'src/app/data/generos';
import { nacionalidades } from 'src/app/data/nacionalidades';
import { clubes } from 'src/app/data/clubes';
import { Clubes } from 'src/app/models/clubes';
import { Persona } from 'src/app/models/persona';

const doc = new jsPDF('p','pt');

@Component({
  selector: 'app-registro-screens',
  templateUrl: './registro-screens.component.html',
  styleUrls: ['./registro-screens.component.css']
})
export class RegistroScreensComponent implements OnInit {
  @ViewChild('registroInfo',{static:false})el!:ElementRef
  title = 'jr-test';
  generos=generos;
  nacionalidades=nacionalidades;
  clubes=clubes;
  selectClube?:Clubes;
  selectFecha:string="";
  persona:Persona | undefined;
  formRegistro!:FormGroup;
  isMayor: boolean = false;
  categoryId?: string;
  // estados ng-wizard
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
//config ng-wizard
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,

  };
  form:FormGroup
  constructor(private ngWizardService: NgWizardService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generos;
    this.nacionalidades;
    this.clubes;
    this.persona;
    this.formRegistro= new FormGroup({
      nombreP: new FormControl(),
      apPaterno:new FormControl(),
      apMaterno: new FormControl(),
      fechaNac:new FormControl(),
      generoP:new FormControl(),
      nacionalidadP:new FormControl(),
      rfcP:new FormControl(),
      ocupacionP:new FormControl(),
      clubP:new FormControl(),
    });
    this.form=this.formBuilder.group({
      name:['']
    })
  }
  //funciones de ng-wizard
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step.index);
    if (args.step.index==0) {
      console.log("hola uno");
    }else if (args.step.index==1) {
      console.log("hola dos");
      this.saveData()
    }else if (args.step.index==2) {
      console.log("hola tres");
      this.pdfCreate();
    }
  }


  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
  //funcion crear Pdf
  pdfCreate(){
    doc.html(this.el.nativeElement,{
      callback:(pdf)=>{
        doc.save("Registro.pdf");
      }
    })
  }
  //funcion que valida fecha de nacimiento
  onBlurMethod(){
    let fecha = this.selectFecha?.split("-")
    let edad = 2022-parseInt(fecha[0]);
    if (edad>18) {
      this.isMayor = true
    }else{
      this.isMayor = false
    }
    console.log(edad);
   }
   //funcion guardar informacion
  saveData(){
    this.persona=this.formRegistro.value
    console.log(this.persona);
    console.log(this.formRegistro.value);
  }
}
