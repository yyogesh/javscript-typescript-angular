import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from './auth/auth-preload-strategy';
import { AuthenticationGuard } from './auth/authentication.guard';
import { LoadGuard } from './auth/load.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AuthPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
