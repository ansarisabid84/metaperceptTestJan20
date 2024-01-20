import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { SchoolsComponent } from './schools/schools.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [

    {
        path: '', component: AppComponent, pathMatch: 'full'
    },

    {
        path: 'classes', component: ClassesComponent
    },

    {
        path: 'schools', component: SchoolsComponent
    },

    {
        path: 'students', component: StudentsComponent
    }
];
