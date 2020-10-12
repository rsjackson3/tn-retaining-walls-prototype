/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WallService } from './wall.service';

describe('Service: Wall', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallService]
    });
  });

  it('should ...', inject([WallService], (service: WallService) => {
    expect(service).toBeTruthy();
  }));
});
