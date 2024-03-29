import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";
import { LoginGuard } from '../core/auth/login.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: SigninComponent },
      { path: 'singup', component: SingupComponent },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {

}
