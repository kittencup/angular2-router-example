import {Component} from 'angular2/angular2';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

import {ViewRef} from 'angular2/angular2';

import Product from './product/Product';
import LeftNav from './admin/LeftNav';
import Dialog from './admin/Dialog';
import Home from './admin/Home';
import Search from './admin/Search';

// http://localhost:3000/product/2/edit(dialog)

@Component({
    selector: 'app',
    directives: [LeftNav, ROUTER_DIRECTIVES],
    template: `
        <left-nav></left-nav>
        <router-outlet></router-outlet>
        <router-outlet name="dialog"></router-outlet>

    `
})
@RouteConfig([
    {path: '/',component:Home, as:'Home'},
    {path:'/search',component:Search,as:'Search'},
    {path: '/product/...', component: Product, as: 'Product'},
    {aux: '/dialog',component:Dialog, as:'Dialog'}
])
export class App {

}

