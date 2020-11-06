import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { PatientService } from '../services/patient-service.service';
import { NewPatient } from '../model/NewPatient';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class NewPatientComponent implements OnInit {

  basicInfoFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  minDate: Date;
  maxDate: Date;

  id : string;

  constructor(private _formBuilder: FormBuilder, private patientService : PatientService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 50, 0, 1);
    this.maxDate = new Date(currentYear + 1,0,0) ;
   }

  ngOnInit(): void {
    this.basicInfoFormGroup = this._formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      contact : ['', Validators.required],
      dob : ['', Validators.required],
      age : ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  savePatientInfo() {
    var patient : NewPatient= {
      firstName : this.basicInfoFormGroup.get('firstName').value,
      lastName :  this.basicInfoFormGroup.get('lastName').value,
      email : this.basicInfoFormGroup.get('email').value,
      contactNumber : this.basicInfoFormGroup.get('contact').value,
      consentToShare : false,
      // dob : this.basicInfoFormGroup.get('dob').value,
      dob : '11-JAN-1992',
      age : this.basicInfoFormGroup.get('age').value
    }

    this.patientService.addPatientInfo(patient).subscribe(data => {
      this.id = data.id;
      console.log('added with id : ', this.id);
    });
  }
}