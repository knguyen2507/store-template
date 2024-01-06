import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as AppStore from '../../../store/index.store';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() data: Partial<AppStore.ProductStore.ProductModel>[];

  ngOnInit(): void {}

  detailCard(item: Partial<AppStore.ProductStore.ProductModel>) {
    window.location.href = `${environment.host}/cua-hang/san-pham/chi-tiet/${item.productCode}`;
  }
}
