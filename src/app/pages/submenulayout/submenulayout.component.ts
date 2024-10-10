import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-submenulayout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './submenulayout.component.html',
  styleUrl: './submenulayout.component.scss'
})
export class SubmenulayoutComponent {
  menuList: any[] = [
    {
      title: 'Home',
      children: [
        {
          title: 'Dashboard',
          route: 'dashboard'
        },
        {
          title: 'Analytics',
          route: 'analytics'
        },
      ]
    },
    {
      title: 'Employee',
      children: [
        {
          title: 'New Employee',
          route: 'employee'
        },
        {
          title: 'Edit Employee',
          route: 'employee'
        },
      ]
    },
    {
      title: 'Master',
      children: [
        {
          title: 'City',
          route: 'city'
        },
        {
          title: 'State',
          route: 'state'
        },
        {
          title: 'Dist',
          route: 'dist'
        },
      ]
    },
  ]

  expandtitle: string = '';
  expandMenu(title: string) {
    console.log(this.expandtitle);

    if (this.expandtitle === title) {
      this.expandtitle = '';
    } else {
      this.expandtitle = title;
    }
  }
}
