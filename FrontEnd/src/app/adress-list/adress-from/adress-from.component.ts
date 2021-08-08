import { Router } from '@angular/router';
import { AdressService } from './../../services/adress.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/models/adress.model';

@Component({
  selector: 'app-adress-from',
  templateUrl: './adress-from.component.html',
  styleUrls: ['./adress-from.component.css']
})
export class AdressFromComponent implements OnInit {

  adressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adressService: AdressService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.adressForm = this.formBuilder.group( {
      reference: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });
  }

  onSaveAdress() {
    const reference = this.adressForm.get('reference').value;
    const latitude = this.adressForm.get('latitude').value;
    const longitude = this.adressForm.get('longitude').value;
    const newAdress = new Adress(reference, latitude, longitude);
    this.adressService.createNewAdress(newAdress);
    this.router.navigate(['/adress']);
  }

}
