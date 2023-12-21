import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import * as AppStore from '../../../store/index.store';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  constructor(private store: Store<AppStore.ParameterStore.parameterReducers.ParameterState>) {}

  offset = 0;
  limit = 8;

  pageEvent: PageEvent;

  @Input() total: number;

  @Output() paginatorChanged = new EventEmitter();

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.limit = e.pageSize;
    this.offset = e.pageIndex * e.pageSize;
    this.store.dispatch(
      AppStore.ParameterStore.parameterActions.loadPagi({
        item: {
          limit: this.limit,
          offset: this.offset,
        },
      }),
    );

    this.paginatorChanged.emit();
  }
}
