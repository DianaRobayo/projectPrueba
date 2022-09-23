import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'view', component: ViewUsersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProjectRoutingModule { }
