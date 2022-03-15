import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
    selector: 'jakubsarm-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'JakubSarm.eu';

    constructor(){
        Aos.init();
    }
}
