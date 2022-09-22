import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: '/angular-hello-world/src/app/app.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name: string;
  constructor() {
    this.name = 'Filipe'
   }

  ngOnInit(){
  }

}
