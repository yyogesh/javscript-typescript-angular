import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-react-form';
  customerInfo!: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.customerInfo = this.formBuilder.group({
      firstName: [],
      lastName: [],
      username: [],
      email: [],
      products!: this.formBuilder.array([])
    })
  }

  public get products() {
    let products = this.customerInfo?.get('products') as FormArray
    return products.controls
  }

  addProduct() {
    let products = this.customerInfo.get('products') as FormArray;
    products.push(this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    }))
  }

  deleteProduct(index: number) {
    let products = this.customerInfo.get('products') as FormArray;
    products.removeAt(index);
  }
}
