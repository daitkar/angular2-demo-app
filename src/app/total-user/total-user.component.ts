import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-total-user',
  templateUrl: './total-user.component.html',
  styleUrls: ['./total-user.component.css'],
  providers:[DataService]
})
export class TotalUserComponent implements OnInit {

  constructor(private DataService:DataService){}

  ngOnInit() {
  }

items:any []=[];
getData(){
	this.DataService.getOwnData()
  	.subscribe((data:any)=>{
  		console.log(data);
  		const myArray=[];
  		for(let key in data)
  		{
  			myArray.push(data[key]);
  		}

		this.items=myArray;
  	}
  		);
}
}
