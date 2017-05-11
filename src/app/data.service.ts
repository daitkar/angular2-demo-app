import { Injectable } from '@angular/core';
import {Response,Headers} from '@angular/http'
import 'rxjs/Rx';
import { Observable} from 'rxjs/Rx';

import {Http} from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http:Http) { }


  sendData(user:any){
  	const data=JSON.stringify(user);
  	const headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post("https://angular2-project-2b798.firebaseio.com/data.json",data,{
  		headers:headers
  	}).map((data:Response)=>data.json()
  		)._catch(this.handleError)
  }

  getOwnData(){
  	return this.http.get("https://angular2-project-2b798.firebaseio.com/data.json")
  	.map((response:Response)=>response.json()
  		);
  }
  private handleError(error:any){
  	console.log("error",error)
  return Observable.throw(error);
  }

}
