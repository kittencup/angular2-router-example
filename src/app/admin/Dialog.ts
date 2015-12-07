import {Component} from 'angular2/angular2';

@Component({
    selector: 'dialog',
    template: `
        <h1>Dialog</h1>
        <router-outlet name="confirm"></router-outlet>
    `
})
export default class Dialog {

}