import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'product-detail',
    template: `
        <h1>Product Id {{id}} Detail</h1>
    `
})
export default class ProductDetail {

    id:string;

    constructor(params:RouteParams) {
        this.id = params.get('id');
    }
}
