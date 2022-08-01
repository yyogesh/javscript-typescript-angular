import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SaveData } from './save-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<SaveData> {
  constructor(private readonly dialog: MatDialog) { }

  canDeactivate(component: SaveData): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('CanDeactivate triggered')
    if (component.isDataSaved()) {
      // if (confirm('Are you sure!')) {
      //   return true;
      // } else {
      //   return false;
      // }
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    }
    return of(true);
  }
}
