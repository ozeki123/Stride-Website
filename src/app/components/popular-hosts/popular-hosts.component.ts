import { Component, OnInit } from '@angular/core';
import { Host } from './hosts.model';
import { HostsService } from './hosts.service'

@Component({
  selector: 'app-popular-hosts',
  templateUrl: './popular-hosts.component.html',
  styleUrls: ['./popular-hosts.component.scss']
})
export class PopularHostsComponent implements OnInit {

  hosts: Host[]

  constructor(private hostService: HostsService) { }

  ngOnInit(): void {
    this.getHosts()
  }

  private getHosts() {
    this.hostService.getHosts().subscribe(
                                hosts => this.hosts = hosts
    )
  }

}
