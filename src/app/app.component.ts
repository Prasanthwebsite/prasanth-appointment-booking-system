import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ApiResponseModel, Hospital, User } from './core/classes/hospital.model';
import { HospitalService } from './core/services/hospital.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prasanth';
  userObj: User = new User();
  loggedHospitalData: Hospital = new Hospital();

  private hospitalService = inject(HospitalService)

  constructor(private router: Router) {
    const loggedData = localStorage.getItem('practoLogin');
    if (loggedData != null) {
      this.loggedHospitalData = JSON.parse(loggedData);

    }
  }

  showLogin() {

    const model = document.getElementById('loginModel');
    if (model != null)
      model.style.display = 'block'
  }


  closeLogin() {

    const model = document.getElementById('loginModel');
    if (model != null)
      model.style.display = 'none'
  }

  onLogin() {
    this.hospitalService.login(this.userObj).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        this.loggedHospitalData = res.data;
        localStorage.setItem('practoLogin', JSON.stringify(res.data));
        this.closeLogin();
      } else {
        alert(res.message);
      }
    })
  }

  logOff() {
    localStorage.removeItem('practoLogin');
    this.loggedHospitalData = new Hospital();

    this.router.navigateByUrl('home')
  }

}
