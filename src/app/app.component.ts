import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showComponent = true;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login-page') {
          this.showComponent = false;
        }
      }
    });
  }

  ngOnInit(): void {
    return;
  }
}
