import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { ApiResponseModel, Apppoinment, User } from '../../core/classes/hospital.model';
import { AppointmentService } from '../../core/services/appointment.service';


@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  newAppintment: Apppoinment = new Apppoinment();
  appintmentList: Apppoinment[] = [];


  loggedUserData: User = new User();

  constructor(private appointmentSrv: AppointmentService) {
    const loggedData = localStorage.getItem('practoLogin');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
      this.newAppintment.hospitalId = JSON.parse(loggedData).hospitalId;

    }
  }

  ngOnInit(): void {
    this.loadGrid();

  }


  loadGrid() {
    if (this.loggedUserData.userName == "superadmin") {
      this.getAllAppoints();
    } else {
      this.getAppointmentbyHospital();
    }
  }
  bookAppointment() {
    this.appointmentSrv.newAppointment(this.newAppintment).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert("Appointment Created");
        this.loadGrid();
        this.getAllAppoints();

      } else {
        alert(res.message);
      }

    })
  }


  getAppointmentbyHospital() {
    this.appointmentSrv.getAppointmentbyHospital(this.newAppintment.hospitalId).subscribe((Res: ApiResponseModel) => {

      this.appintmentList = Res.data;
    })
  }

  getAllAppoints() {
    this.appointmentSrv['getAppintments']().subscribe((Res: ApiResponseModel) => {

      this.appintmentList = Res.data;
    })
  }

}

