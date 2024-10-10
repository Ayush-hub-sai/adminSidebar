import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SubmenulayoutComponent } from './pages/submenulayout/submenulayout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        // component: LayoutComponent,
        component: SubmenulayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                title:'Dashboard'
            },
            {
                path: 'employee',
                component: EmployeeComponent,
                title:'Employee'
            }
        ]
    }
];
