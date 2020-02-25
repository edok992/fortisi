import { TestBed } from '@angular/core/testing';

import { ShopinventoryService } from './shopinventory.service';

describe('ShopinventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopinventoryService = TestBed.get(ShopinventoryService);
    expect(service).toBeTruthy();
  });
});
