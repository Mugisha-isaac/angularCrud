import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 ngForm:FormGroup
  constructor(private fb: FormBuilder,private ps:ProductsService){ 
    this.createForm();
  }
  createForm(){
    this.ngForm = this.fb.group({
      productName:['',Validators.required],
      productPrice:['',Validators.required],
      productDescription:['',Validators.required]
    })
  }

  addProduct(productName,productDescription,productPrice){
   this.ps.addProduct(productName,productDescription,productPrice);
  }
  ngOnInit(): void {
  }

}
