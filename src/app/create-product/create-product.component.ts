import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {

  formProduct: any = {};

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      title: new FormControl(``),
      author: new FormControl(``),
      stock: new FormControl(0)
    })
  }

  addProduct() {
    this.productsService.sendProduct(this.formProduct.value).subscribe({next: (data: any) => {
      console.log(data);
      this.router.navigate([`/`]);
    },
    error: (err: any) => console.log(err)
  
  })
}
}
