import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';


@Injectable()
export class JobBoardService {

//http://jobboardadminapi20170917094805.azurewebsites.net/api/salarytypes

private readonly endPoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';

  constructor(private http: Http) { 

  }

  getJobs(filter) {
    console.log(filter)
    return this.http.get(this.endPoint + 'jobboards' + '?' + this.toQueryString(filter))
      .map(jobBoard => jobBoard.json(),
    );
  }

  toQueryString(obj){
    var parts = [];
    for(var property in obj){
      var value = obj[property];
      /* console.log(value);
      console.log(obj);
      console.log('Property: '+ property); */
      
      if(value!=null && value!=undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value))
    }
    return parts.join('&');
  }

}
