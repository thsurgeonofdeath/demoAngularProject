import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: any;

  constructor(public data: DataService) { 
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
    })
  }

}