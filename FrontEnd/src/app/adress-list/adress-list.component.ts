import { Router } from '@angular/router';
import { AdressService } from './../services/adress.service';
import { Adress } from './../models/adress.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html',
  styleUrls: ['./adress-list.component.css']
})
export class AdressListComponent implements OnInit, OnDestroy {

  adressList: Adress[];
  adressSubscription: Subscription;

  constructor(
    private adressService: AdressService,
    private router: Router
  ) { }

  ngOnInit() {
    this.adressSubscription = this.adressService.adressSubject.subscribe(
      (adressList: Adress[]) => {
        this.adressList = adressList;
      }
    );
    this.adressService.getAdressList();
    this.adressService.emitAdress();
  }

  onNewAdress() {
    this.router.navigate(['adress', 'new']);
  }

  ngOnDestroy(): void {
    this.adressSubscription.unsubscribe();
  }

}
