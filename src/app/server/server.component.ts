import { Component, OnInit } from '@angular/core';
@Component({
    //selector: '.app-server', class selector
    // selector: '[app-server]',
   // selector: '[.app-server]',
    selector: 'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent implements OnInit {
   serverId: number=10;
   serverStatus: string='offline';
    constructor() { }
    ngOnInit() { }
}
 