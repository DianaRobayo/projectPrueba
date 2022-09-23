import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  listUsers$ = new Subject<any>();

  constructor() { }

  addNewUser(data:any){
    const newData = localStorage.getItem('dataUser');

    if(typeof newData !== 'undefined' && newData !== null){
      const arrayNewData = JSON.parse(newData);
      arrayNewData.push(data);
      localStorage.setItem('dataUser', JSON.stringify(arrayNewData));
      
    } else {
      localStorage.setItem('dataUser', JSON.stringify([data]));
    }

    this.listUsers$.next(data);
  }
}
