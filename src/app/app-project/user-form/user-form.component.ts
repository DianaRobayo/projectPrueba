import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

interface Gender {
  value: string;
  name: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.minLength(3)]],
    document: ['', [Validators.required, Validators.pattern('[0-9]{10,}')]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    age: ['', [Validators.min(0), Validators.max(100)]],
    hobby: ['', [Validators.required]]
  });

  selectHobby: string = '';
  hobbies: string[] = ['Leer', 'Caminar','Dormir'];

  selectGender: string = '';
  genders: Gender[] = [
    {value: '0', name: 'Masculino'},
    {value: '1', name: 'Femenino'}
  ];

  submit: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserServiceService,
    public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {

  }

  get fc(){
    return this.form.controls;
  }

  get fv(){
    return this.form.value;
  }

  save(){
    this.submit = true;
    let dataUser = this.form.getRawValue();

    if(this.form.valid){
      this.userService.addNewUser(dataUser);
      this.dialog.open(DialogComponent);
      this.form.reset();  
    }
  }

}
