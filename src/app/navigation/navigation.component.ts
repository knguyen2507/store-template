import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  menuGroups = [
    {
      matIcon: 'shop',
      title: 'Hãng sản xuất',
      menus: [
        {
          matIcon: 'account_box',
          url: '/brand/samsung',
          title: 'Samsung',
        },
        {
          matIcon: 'account_circle',
          url: '/brand/toshiba',
          title: 'Toshiba',
        },
      ],
    },
    {
      matIcon: 'bookmark',
      title: 'Danh mục',
      menus: [
        {
          matIcon: 'account_box',
          url: '/category/tv',
          title: 'TV',
        },
        {
          matIcon: 'account_circle',
          url: '/category/tu-lanh',
          title: 'Tủ lạnh',
        },
      ],
    },
  ];
}
