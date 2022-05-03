import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NgModule } from "@angular/core";
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { RouterModule, Routes } from "@angular/router";
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SigninComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', component: SigninComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: SigninComponent },
  {
    path: 'user/:userName', component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
imports: [
  RouterModule.forRoot(routes)
],
exports: [
  RouterModule
]
})
export class AppRoutingModule {

}
