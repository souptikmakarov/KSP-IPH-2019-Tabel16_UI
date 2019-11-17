import { TestBed } from '@angular/core/testing';

import { ImgUtilitiesService } from './img-utilities.service';

describe('ImgUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgUtilitiesService = TestBed.get(ImgUtilitiesService);
    expect(service).toBeTruthy();
  });
});
