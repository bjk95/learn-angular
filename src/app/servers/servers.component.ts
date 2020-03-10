import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  ID: Number = 666;
  serverName: String = 'The big one';
  serverStatus: String = 'active';

  allowNewVM: Boolean = true;
  allowNewDatabase: Boolean = false;

  serverCreationStatus: String = "Starting";

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {}

  ngOnInit() { }

  onCreateServer() {
    this.serverCreationStatus = 'Ready';
  }

}
