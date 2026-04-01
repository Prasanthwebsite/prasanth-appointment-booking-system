import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enevironment } from '../../../enevironments/enevironment';
import { Hospital, ApiResponseModel, Apppoinment } from '../classes/hospital.model';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  [x: string]: any;

  constructor(private http :HttpClient) { }


newAppointment(obj: Apppoinment): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(Enevironment.api_url + Constant.API_END_POINT.NEW_APPOINTMENT,obj)

  }
   getAppointmentbyHospital(id: number): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(Enevironment.api_url + Constant.API_END_POINT.GET_APPOINTMENTS_BY_HOSPITAL + id)

  } 
    getAppointments(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(Enevironment.api_url + Constant.API_END_POINT.GET_APPOINTMENTS)

  } 

  }

