import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientBasicInfo} from '../model/PatientBasicInfo';
import { PatientService } from '../services/patient-service.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  constructor(private patientService : PatientService) { 

  }

  patientInfo : PatientBasicInfo;
  patientInfoForm: FormGroup;

  ngOnInit(): void {
    this.patientService.fetchPatientBasicInfo('1').subscribe(data => {
      this.patientInfo = data;

      this.patientInfoForm = new FormGroup({
        id:  new FormControl(this.patientInfo.id),
        firstName : new FormControl(this.patientInfo.firstName),
        lastName : new FormControl(this.patientInfo.lastName),
        email : new FormControl(this.patientInfo.email),
        contactNumber : new FormControl(this.patientInfo.contactNumber),
        dob : new FormControl(this.patientInfo.dob),
        age : new FormControl(this.patientInfo.age),
        consentToShare : new FormControl(this.patientInfo.consentToShare)
      
      });
    });
  }


savePatientInfo() {

}

}
