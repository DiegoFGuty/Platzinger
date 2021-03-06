import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  friends: User[];
  query:string = "";

  constructor(private userService: UserService) {
    this.friends = userService.getFriends();
  }

  ngOnInit() {
  }


}
