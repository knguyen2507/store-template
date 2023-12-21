import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  public brandName: string | undefined;

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.brandName = params['brandName'];
    });
  }

  ngOnInit(): void {}
}
