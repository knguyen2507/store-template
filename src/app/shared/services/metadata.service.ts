import { Injectable } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

export interface Metadata {
  pageTitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  // Subject emitting the Metadata hierarchy
  private readonly _metadatas$ = new BehaviorSubject<Metadata>({ pageTitle: '' });

  // Observable exposing the Metadata hierarchy
  readonly metadatas$ = this._metadatas$.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        // Filter the NavigationEnd events as the Metadata is updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data) {
              return this.getMetadata(child.snapshot.data);
            } else {
              return null;
            }
          }
          return null;
        }),
      )
      .subscribe((metadata: Metadata) => {
        // Emit the new meta
        this._metadatas$.next(metadata);
      });
  }

  private getMetadata(data: Data) {
    // The Metadata can be defined as a static string or as a function to construct the Metadata element out of the route data
    return typeof data['metadata'] === 'function' ? data['metadata'](data) : data['metadata'];
  }
}
