import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { product } from '../module/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   productlist :product [] = [];
   filterproductslist : product [] = [];
  //  categorysection : {
  //   'men s'
  //  }

  constructor( private http:HttpService) { }

  ngOnInit(): void {
    this.getProductDetails()
  }
  getProductDetails(){
    this.http.getdata("productsitems").subscribe((resp:any)=>{
      this.productlist = resp;
      this.filterproducts('all')
      
     console.log("productlist",this.productlist)
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      console.log("Api Complete")
    })
  }
    
    filterproducts ( category :string ){
      if( category != 'all'){

        this.filterproductslist =this.productlist.filter((el=> (el.category == category)))
      }
        else {
          this.filterproductslist =this.productlist ;
        }
    }
  }




