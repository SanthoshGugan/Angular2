import { TestBed, inject } from '@angular/core/testing';

import { FeatureGaurdService } from './feature-gaurd.service';

describe('FeatureGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureGaurdService]
    });
  });

  it('should be created', inject([FeatureGaurdService], (service: FeatureGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
