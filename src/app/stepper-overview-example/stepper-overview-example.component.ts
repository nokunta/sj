import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component } from '@angular/core';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.component.html',
  styleUrls: ['stepper-overview-example.component.scss'],
})
export class StepperOverviewExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [false, Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });

  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  get maisengracada(){
    return `assets/foto_mais_engracada/${this.firstFormGroup.value.firstCtrl}.JPG`
  }

  get maismemoravel(){
    return `assets/mais_memoravel/${this.secondFormGroup.value.secondCtrl}.JPG`
  }

  get melhorrefeicao(){
    return `assets/MELHOR_REFEICAO/${this.thirdFormGroup.value.thirdCtrl}.JPG`
  }

  get melhorselfie(){
    return `assets/melhor_selfie/${this.fourthFormGroup.value.fourthCtrl}.JPG`
  }

  get melhoranimal(){
    return `assets/melhor_animal/${this.fifthFormGroup.value.fifthCtrl}.JPG`
  }

  get maiorloucura(){
    return `assets/melhor_animal/${this.sixthFormGroup.value.sixthCtrl}.JPG`
  }
}
