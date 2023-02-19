import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from '@firebase/app';
import { MenuItem } from './models/shared.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Page courante';
  //     <li><a href="#">Gestion des notes</a></li>
  //     <li><a href="#">Classes</a></li>
  //     <li><a href="#">Gestion des classes</a></li>
  //     <li><a href="#">Matières</a></li>
  //     <li><a href="#">Absences</a></li>
  //     <li><a href="#">Profs</a></li>
  //     <li><a href="#">Comptabilité</a></li>
  menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Tableau de bord',
      url: '/home',
      image: 'accueil.png'
    },
    {
      id: 2,
      label: 'Eleves',
      url: '/eleves',
      image: 'eleves.png'
    },
    {
      id: 3,
      label: 'Notes',
      url: '/notes',
      image: 'notes.png'
    },
    {
      id: 4,
      label: 'Parents',
      url: '/parents',
      image: 'parents.png'
    },
    {
      id: 5,
      label: 'Bulletins',
      url: '/bulletins',
      image: 'bulletins.png'
    },
    {
      id: 6,
      label: 'Classes',
      url: '/classes',
      image: 'classes.png'
    },
    {
      id: 7,
      label: 'Comptabilité',
      url: '/comptabilite',
      image: 'comptabilite.png'
    }
  ];

  constructor(private router: Router) {
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

  onMenuItemClick(menu: MenuItem) {
    this.pageTitle = menu.label;
    this.router.navigate([menu.url]);
  }
}
