import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Component({
    moduleId: module.id,
    selector: 'toh-nav',
    templateUrl: '../views/nav.component.html',
    styleUrls: ['../styles/nav.component.css'],
})

export class NavComponent implements OnInit
{
    menuItems: MenuItem[];

    constructor() { }

    ngOnInit()
    {
        this.menuItems = [
            { name: 'Dashboard', uri: '/heroes/dashboard' },
            { name: 'Heroes', uri: '/heroes' },
            { name: 'Villains', uri: '/villains' },
            { name: 'Other', uri: '/other' }
        ];
    }
}
