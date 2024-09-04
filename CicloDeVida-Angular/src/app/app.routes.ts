import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { InputFormComponent } from './pages/input-form/input-form.component';
import { ComponentAComponent } from './pages/component-a/component-a.component';
import { ComponentBComponent } from './pages/component-b/component-b.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "input-forms",
        component: InputFormComponent
    },
    {
        path: "display-data",
        component: DisplayDataComponent
    },
    {
        path: "component-a",
        component: ComponentAComponent
    },
    {
        path: "component-b",
        component: ComponentBComponent
    },
    {
        path: '', 
        redirectTo: '/component-a', 
        pathMatch: 'full'
    }
];
