import { TestBed } from '@angular/core/testing';

import { VoirProduitsService } from './voir-produits.service';

describe('VoirProduitsService', () => {
  let service: VoirProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoirProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
