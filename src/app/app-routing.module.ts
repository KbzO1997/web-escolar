import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './ui/components/notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./ui/components/portal/portal.module').then(m => m.PortalModule) },
                    { path: 'parametry', loadChildren: () => import('./ui/components/parametry/parametry.module').then(m => m.ParametryModule) },
                    { path: 'asing-matery', loadChildren: () => import('./ui/components/asing-matery/asing-matery.module').then(m => m.AsingMateryModule) },
                    { path: 'course-student', loadChildren: () => import('./ui/components/course-student/course-student.module').then(m => m.CourseStudentModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./ui/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
