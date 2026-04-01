import { Component } from '@angular/core';
import { NewHospitalComponent } from '../new-hospital/new-hospital.component';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Hospital, ApiResponseModel } from '../../core/classes/hospital.model';
import { HospitalService } from '../../core/services/hospital.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public hospitalObj :Hospital = new Hospital();
  // private isShow :boolean = false;

  private subscriptions :Subscription [] =[] ;

  constructor(private hospitalSrv: HospitalService){

  }

  onRegister(){
    this.subscriptions.push(
       this.hospitalSrv.registerHospital(this.hospitalObj).subscribe((res:ApiResponseModel)=>{

      if(res.result){   
        alert("Registrtaion Success");
      }else{
        alert(res.message);
      }
    },error => {
      alert(JSON.stringify(error))
    }))
   
  }

}
