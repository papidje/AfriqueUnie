import { TestBed } from '@angular/core/testing';

import { AdressService } from './adress.service';

describe('AdressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdressService = TestBed.get(AdressService);
    expect(service).toBeTruthy();
  });
});
