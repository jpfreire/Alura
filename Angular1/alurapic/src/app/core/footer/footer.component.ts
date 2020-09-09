import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private route: Router) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}
