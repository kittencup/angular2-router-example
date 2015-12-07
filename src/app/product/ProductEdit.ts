import {Component} from 'angular2/angular2';
import {RouteParams,RouteConfig} from 'angular2/router';

@Component({
    selector:'product-edit',
    template:`
        <h1>Product {{id}} Edit</h1>
    `
})
export default class ProductEdit{

    id:string;

    constructor(params:RouteParams) {
        this.id = params.get('id');
    }
}