import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: [
    './servers.component.css',
    './servers.component.scss'
]
})
export class ServersComponent implements OnInit {

  ID: Number = 666;
  serverName: String = 'The big one';
  serverStatus: String = 'offlne';
  newServerName: String = 'Enter name';
  serverCreated: Boolean = false;

  allowNewVM: Boolean = true;
  allowNewDatabase: Boolean = false;

  serverCreationStatus: String = 'Starting';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;

    this.newServerName = 'Done! ' + this.newServerName + ' created';
  }

  onUpdateServerName(event: Event){
    this.newServerName = (<HTMLInputElement>event.target).value;
  }


  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
