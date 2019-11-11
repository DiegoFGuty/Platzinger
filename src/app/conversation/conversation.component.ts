import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Interfaces/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  friendId: Number;
  friend: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);

    this.friend = userService.getAFriend(this.friendId);
   }

  ngOnInit() {
  }

}
