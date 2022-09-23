import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './app-project/user-form/user-form.component';
import { DialogComponent } from './app-project/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewUsersComponent } from './app-project/view-users/view-users.component';
import { AppProjectModule } from './app-project/app-project.module';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DialogComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    AppProjectModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
