import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListDatasourceComponent } from './admin/list-datasource/list-datasource.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { FormGuardGuard } from './auth/form-guard.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '', canActivateChild: [PermissionsGuard],
        children: [
          { path: 'add-user', component: AddUserComponent, canDeactivate: [FormGuardGuard] },
          { path: 'add-product', component: AddProductComponent, canDeactivate: [FormGuardGuard] },
        ]
      },
      { path: 'list-datasource', component: ListDatasourceComponent },
    ]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
