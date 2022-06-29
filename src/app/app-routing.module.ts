import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestReactiveformComponent } from './test-reactiveform/test-reactiveform.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [
  {path: '',  component:TestReactiveformComponent},
  {path: "user-listing", component:UserListingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
