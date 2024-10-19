import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-submenulayout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
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
          title: 'Employee List',
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

  constructor(private router: Router) { }

  expandtitle: string = '';
  expandMenu(title: string) {
    this.expandtitle = this.expandtitle === title ? '' : title;
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
