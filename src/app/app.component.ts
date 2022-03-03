import { Component } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";

const doc = new jsPDF();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'jr-test';
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      ],
    }
  };
  form:FormGroup
  constructor(private ngWizardService: NgWizardService,private formBuilder: FormBuilder) {
  }
  ngOnInit(): void
  {   
      this.form=this.formBuilder.group({
        name:['']
      })
  }
  send(){
    console.log(this.form.value);
  }
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
      this.send()
    }else if (args.step.index==2) {
      console.log("hola tres");
      doc.text(this.form.value.name, 10, 10);
      doc.save("a4.pdf");
    }
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
}
