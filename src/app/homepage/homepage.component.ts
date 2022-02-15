import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  result: any;
  newId: any;

  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit(): void {
    this.myservice.displaycustomer()
    .subscribe(r=>
      {
        this.result=r;
      });
  }
deletecus(CustomerId :any)
{
  this.myservice.deletecustomer(CustomerId)
  .subscribe((r:any)=>
    {
      this.result=r;
      window.location.reload();
    });
}

updatecus(CustomerId :any)
{
  this.newId=CustomerId;
  this.router.navigate(['/update',CustomerId]);
}

addcus()
{
  this.router.navigate(['/addcustomer']);
}
viewcus(CustomerId :any)
{
  this.newId=CustomerId;
  this.router.navigate(['/View',CustomerId]);
}

}
