import {Component} from 'angular2/angular2';

@Component({
    selector: 'alert',
    template: `
        <h1>Alert</h1>
        <router-outlet name="confirm"></router-outlet>
    `
})
export default class Alert {

}