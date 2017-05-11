import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms"
import {Response} from '@angular/http';
import { DataService} from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[DataService]
})
export class RegistrationComponent implements OnInit {

  myForm:FormGroup;
error=false;
errorMessage='';
  constructor(private DataService:DataService, private fb:FormBuilder){

  }

  ngOnInit() {
    this.myForm=this.fb.group({
      "username":['',Validators.required],
      "email":['',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      "password":['',Validators.required],
      "confirmPassword":['',Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
        ])]

    });
  }
 onSubmit(){
   console.log("its work",this.myForm);
  var username = this.myForm.controls['username'].value ;
  var email=this.myForm.controls['email'].value ;
  console.log("email",email,username);
  this.DataService.sendData({username ,email})
  .subscribe((data:any)=> alert("data save on server!")
    ); 

  

 }
 isEqualPassword(control:FormControl):{[s:string]:boolean}{
   if(!this.myForm){
     return {passwordNotMatch:true}
   }
   if(control.value !== this.myForm.controls['password'].value){
     return {passwordNotMatch:true}
   }

 }
}
