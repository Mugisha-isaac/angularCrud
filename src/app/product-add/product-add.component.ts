import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 ngForm:FormGroup
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  createForm(){
    this.ngForm = this.fb.group({
      productName:['',Validators.required],
      productPrice:['',Validators.required],
      productDescription:['',Validators.required]
    })
  }
  ngOnInit(): void {
  }

}
