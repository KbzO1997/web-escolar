import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Mantenedor',
                items: [
                    { label: 'Curso - Materia', icon: 'pi pi-fw pi-id-card', routerLink: ['/parametry'] },
                    { label: 'Asignar Materia', icon: 'pi pi-fw pi-id-card', routerLink: ['/asing-matery'] },
                    { label: 'Ingresar Curso', icon: 'pi pi-fw pi-id-card', routerLink: ['/course-student'] },
                ]
            },
            
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            }
                        ]
                    }
                   
                ]
            }
        ];
    }
}