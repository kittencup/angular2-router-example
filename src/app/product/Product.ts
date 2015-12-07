import {Component} from 'angular2/angular2';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import ProductTable from './ProductTable';
import ProductDetail from './ProductDetail';
import ProductEdit from './ProductEdit';
import Alert from '../admin/Alert';

@Component({
    selector: 'product',
    directives:[ROUTER_DIRECTIVES],
    template: `
        <h1>Product Module</h1>
        <router-outlet></router-outlet>
        <router-outlet name="alert"></router-outlet>
        <a [router-link]="['./ProductEdit',{id:11},['Alert']]">Alert</a>
    `
})
@RouteConfig([
    {path: '/', component: ProductTable, as: 'ProductTable'},
    {path: '/:id', component: ProductDetail, as: 'ProductDetail'},
    {path: '/:id/edit', component: ProductEdit, as: 'ProductEdit'},
    {aux: '/alert',component:Alert, as:'Alert'}
])
export default class Product{

}