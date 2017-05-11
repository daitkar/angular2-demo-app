import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import { DataService} from '../data.service';
import {FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms"


@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css'],
  providers:[DataService]
})
export class WorkareaComponent implements OnInit {
myForm:FormGroup;
error=false;
errorMessage='';
  constructor(private DataService:DataService,private fb:FormBuilder){}

  ngOnInit() {
    this.myForm=this.fb.group({
      password:['',Validators.required],
      confirmPassword:['',Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
        ])]

    });
  }
 
 isEqualPassword(control:FormControl):{[s:string]:boolean}{
   if(!this.myForm){
     return {passwordNotMatch:true}
   }
   if(this.myForm.controls['confirmPassword'].value !== this.myForm.controls['password'].value){
     return {passwordNotMatch:true}
   }

 }

OnSubmmit(form:NgForm){
	var username = form.value.user.username ;
	var email=form.value.user.email;
	console.log("email",email,username);
	this.DataService.sendData({username ,email})
	.subscribe((data:any)=>console.log(data)); 

}


}
