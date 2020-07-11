import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CheckoutModel } from '../../../order/checkout.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  constructor(
    @Inject(MAT_DIALOG_DATA) public checkoutModel: CheckoutModel,
    public dialogRef: MatDialogRef<CustomerInfoComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

 

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null],
      'phoneNo': [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern(emailregex) ]],
      'address': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      'validate': ''
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :'';
  }

  onSubmit(formData) {
    this.dialogRef.close(formData);
  }
}
