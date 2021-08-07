import { Component } from '@angular/core';
import firebase from '@firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afrique Unie';
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAD241qoCDZV71XecJCsIHRytTVnIJkNJs",
      authDomain: "bookshelves-e7a25.firebaseapp.com",
      projectId: "bookshelves-e7a25",
      storageBucket: "bookshelves-e7a25.appspot.com",
      messagingSenderId: "238766067091",
      appId: "1:238766067091:web:5b3f2d6a28c585861eac66"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
