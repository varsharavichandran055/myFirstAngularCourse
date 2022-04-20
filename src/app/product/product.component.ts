import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pid: number | undefined;
  name:string | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
       this.pid=p['id'];
       this.name=p['prodName'];


    });
}

}
