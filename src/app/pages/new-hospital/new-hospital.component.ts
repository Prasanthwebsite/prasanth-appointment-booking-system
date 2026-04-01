import { Component,OnDestroy } from '@angular/core';
import { ApiResponseModel, Hospital } from '../../core/classes/hospital.model';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../core/services/hospital.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {
  // public hospitalObj :Hospital = new Hospital();
  // // private isShow :boolean = false;

  // private subscriptions :Subscription [] =[] ;

  // constructor(private hospitalSrv: HospitalService){

  // }

  // onRegister(){
  //   this.subscriptions.push(
  //      this.hospitalSrv.registerHospital(this.hospitalObj).subscribe((res:ApiResponseModel)=>{

  //     if(res.result){   
  //       alert("Registrtaion Success");
  //     }else{
  //       alert(res.message);
  //     }
  //   },error => {
  //     alert(JSON.stringify(error))
  //   }))
   
  // }


}
