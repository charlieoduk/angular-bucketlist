import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


// Route config let's you map routes to components
const routes: Routes = [
    // map '/lgoin' to the login component
    {
        path: 'login',
        component: LoginComponent,
    },
    // map /home to the home page
    {
        path: 'home',
        component: HomeComponent,
    },
    // map '/' to '/login' as our default route
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];

export const appRouterModule = RouterModule.forRoot(routes);
