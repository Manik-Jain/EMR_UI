import { Component, OnInit } from '@angular/core';
import {Audit} from '../model/Audit';
import { PatientService } from '../services/patient-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientService : PatientService) { }

  patientAudit : Audit[];

  ngOnInit(): void {
    this.fetchPatientAuditDetails();
  }

  fetchPatientAuditDetails() {
    this.patientService.fetchPatientAuditTrail('1').subscribe(data => {
      this.patientAudit = data;
    })
  }

}
