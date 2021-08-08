import { firebase } from '@firebase/app';
import '@firebase/database';
import { Adress } from './../models/adress.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  adressList: Adress[] = [];
  adressSubject = new Subject<Adress[]>();

  constructor() { }

  emitAdress() {
    this.adressSubject.next(this.adressList);
  }

  saveAdressList() {
    firebase.database().ref('/adress').set(this.adressList);
  }

  getAdressList() {
    firebase.database().ref('/adress')
      .on('value', (data) => {
        this.adressList = data.val() ? data.val() : [];
        this.emitAdress();
      });
  }

  getSingleAdress(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/adress/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewAdress(newAdress: Adress) {
    this.adressList.push(newAdress);
    this.saveAdressList();
    this.emitAdress();
  }

  removeAdress(adress: Adress) {
    const adressIndexToRemove = this.adressList.findIndex(
      (adressEl) => {
        if(adressEl === adress) {
          return true;
        }
      }
    );
    this.adressList.splice(adressIndexToRemove, 1);
    this.saveAdressList();
    this.emitAdress();
  }
}
