import { Component, OnInit } from '@angular/core';
import firebase from '@firebase/app';
import '@firebase/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isauth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isauth = true;
        } else {
          this.isauth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signout();
  }

}
