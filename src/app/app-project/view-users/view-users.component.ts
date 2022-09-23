import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../../services/user-service.service';
import {MatTable} from '@angular/material/table';
import { Router } from '@angular/router';


interface Gender {
  value: string;
  name: string;
}

export interface defaultTable {
  name: string;
  surname: string;
  document: number;
  email: string;
  gender: string;
  age: number;
  hobby: string;
}

const dataDefault: defaultTable[] = [
  {name: 'Maria', surname: 'Sanchez', document:1234567890, email:'maria@gmail.com',
   gender:'Femenino', age:10, hobby:'Caminar'}
];  

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  
  @ViewChild(MatTable) table!: MatTable<defaultTable>;
  displayedColumns: string[] = ['name', 'surname', 'document', 'email',
   'gender', 'age', 'hobby'];

  dataSource = dataDefault;
  newData = [];

  constructor(private userService: UserServiceService, private router: Router) {
    this.userService.listUsers$.subscribe(data => {
      this.dataSource.concat(this.newData,data); 
      this.table.renderRows(); 
    });
   }

  ngOnInit(): void {
    
    this.newData = JSON.parse(localStorage.getItem('dataUser') || '[]');

    if(typeof this.dataSource !== 'undefined' && this.dataSource !== null){
      if(this.newData.length > 0){
        this.newData.map((x:any) =>{
          if(x.gender == '0'){
            x.gender = 'Masculino';
          } else {
            x.gender = 'Femenino';
          }
        });
        this.dataSource = this.dataSource.concat(this.newData);         
      }       
    } 
   
  }

  return(){
    this.router.navigate(['']);
  }

}
