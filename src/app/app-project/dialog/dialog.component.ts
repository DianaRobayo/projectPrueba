import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.router.navigate(['/view']);
  }
  

}
