import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enevironment } from '../../../enevironments/enevironment';
import { Constant } from '../constant/constant';
import { ApiResponseModel, Hospital, User } from '../classes/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  registerHospital(obj: Hospital): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(Enevironment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL,obj)

  }


  login(obj: User): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(Enevironment.api_url + Constant.API_END_POINT.LOGIN,obj)

  }  


 
}
