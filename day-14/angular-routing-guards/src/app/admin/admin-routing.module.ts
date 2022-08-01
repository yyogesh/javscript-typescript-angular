import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuardGuard } from '../auth/form-guard.guard';
import { PermissionsGuard } from '../auth/permissions.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListDatasourceComponent } from './list-datasource/list-datasource.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        canActivateChild: [PermissionsGuard],
        children: [
          {
            path: 'add-user',
            canDeactivate: [FormGuardGuard],
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            canDeactivate: [FormGuardGuard],
            component: AddProductComponent,
          },
        ],
      },
      { path: 'list', component: ListDatasourceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
