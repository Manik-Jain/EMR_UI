import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe, throwError } from 'rxjs';
import { map, catchError }  from 'rxjs/operators';
import {Audit} from '../model/Audit';
import {PatientBasicInfo} from '../model/PatientBasicInfo';
import {NewPatient} from '../model/NewPatient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }

  addPatientInfo(newPatient : NewPatient) : Observable<PatientBasicInfo>{
    console.log('Adding patient : ', newPatient);
    return this.httpClient.post<PatientBasicInfo>('http://localhost:5000/patient', newPatient).pipe(
      catchError( this.handleError
         ));
  }

  fetchPatientBasicInfo(patientId : string) : Observable<PatientBasicInfo> {
    return this.httpClient.get<PatientBasicInfo>('http://localhost:5000/patient/1');
  }

  fetchPatientAuditTrail(patientId : string) : Observable<Audit[]> {
    return this.httpClient.get<Audit[]>('http://localhost:5000/audit/1');
  }

  handleError(error : HttpErrorResponse) {
    return throwError(error);
  }
  
}
