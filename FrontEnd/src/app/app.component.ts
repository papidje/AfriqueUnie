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
      apiKey: "AIzaSyAkLArAIPE0aomI96vAfnpyfT9GY5Gkhec",
      authDomain: "afriqueunie-4c2c3.firebaseapp.com",
      databaseURL: "https://afriqueunie-4c2c3-default-rtdb.firebaseio.com",
      projectId: "afriqueunie-4c2c3",
      storageBucket: "afriqueunie-4c2c3.appspot.com",
      messagingSenderId: "146143548716",
      appId: "1:146143548716:web:ce15d3592c71dd3bc9c889"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
