import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  data = [
    { title: 'Test 1', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 001' },
    { title: 'Test 2', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 002' },
    { title: 'Test 3', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 003' },
    { title: 'Test 4', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 004' },
    { title: 'Test 5', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 005' },
    { title: 'Test 6', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 006' },
    { title: 'Test 7', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 007' },
    { title: 'Test 8', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 008' },
  ];
}
